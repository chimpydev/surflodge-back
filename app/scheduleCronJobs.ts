import cron from 'node-cron';
import { tokenPriceService } from '../modules/token-price/token-price.service';
import { blocksSubgraphService } from '../modules/blocks-subgraph/blocks-subgraph.service';
import { balancerSubgraphService } from '../modules/balancer-subgraph/balancer-subgraph.service';
import { balancerService } from '../modules/balancer/balancer.service';
import { embrService } from '../modules/embr/embr.service';
import moment from 'moment-timezone';
import { sleep } from '../modules/util/promise';
import { tokenService } from '../modules/token/token.service';
import { embrFarmService } from '../modules/embr/embr-farm.service';
import { portfolioService } from '../modules/portfolio/portfolio.service';

export function scheduleCronJobs() {
    //every 20 seconds
    cron.schedule('*/40 * * * * *', async () => {
        try {
            await tokenPriceService.cacheTokenPrices();
        } catch (e) {}
    });

    //every five minutes
    cron.schedule('*/5 * * * *', async () => {
        try {
            await tokenPriceService.cacheHistoricalTokenPrices();
        } catch (e) {}
    });

    cron.schedule('*/5 * * * *', async () => {
        try {
            await tokenService.cacheTokens();
        } catch (e) {}
    });


    cron.schedule('*/5 * * * *', async () => {
        try {
            await blocksSubgraphService.cacheAverageBlockTime();
        } catch (e) {}
    });

    //every 5 seconds
    cron.schedule('*/5 * * * * *', async () => {
        try {
            await blocksSubgraphService.cacheBlockFrom24HoursAgo();
        } catch (e) {}
    });

    //every 5 seconds
    cron.schedule('*/5 * * * * *', async () => {
        try {
            await balancerService.cachePools();
            await embrFarmService.cacheEmbrFarms();
        } catch (e) {}
    });

    //every 30 seconds
    cron.schedule('*/30 * * * * *', async () => {
        try {
            console.log("cache embr farms")
            await embrFarmService.cacheEmbrFarms();
        } catch (e) {
            console.log("error cache emrb farms", e)
        }
    });

    //every 5 seconds
    cron.schedule('*/5 * * * * *', async () => {
        try {
            await embrFarmService.cacheEmbrFarmUsers();
        } catch (e) {
            console.log("error cacheEmbrFarmUsers", e)
        }
    });

    //every 30 seconds
    cron.schedule('*/30 * * * * *', async () => {
        try {
            const previousBlock = await blocksSubgraphService.getBlockFrom24HoursAgo();
            await balancerSubgraphService.cachePortfolioPoolsData(parseInt(previousBlock.number));
            await balancerService.cachePastPools();
            await embrService.cacheProtocolData();
        } catch (e) {}
    });

    //once a day
    cron.schedule('0 0 0 * * *', async () => {
        try {
            const timestamp = moment.tz('GMT').startOf('day').unix();

            //retry loop in case of timeouts from the subgraph
            for (let i = 0; i < 10; i++) {
                try {
                    await portfolioService.cacheRawDataForTimestamp(timestamp);
                    break;
                } catch {
                    await sleep(5000);
                }
            }
        } catch (e) {}
    });

    tokenPriceService.cacheHistoricalTokenPrices().catch();
    embrService.cacheProtocolData().catch();
    console.log('scheduled cron jobs');
}
