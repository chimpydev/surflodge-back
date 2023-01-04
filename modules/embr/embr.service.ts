import { balancerSubgraphService } from '../balancer-subgraph/balancer-subgraph.service';
import { env } from '../../app/env';
import { GqlEmbrConfig, GqlEmbrProtocolData } from '../../schema';
import { getCirculatingSupply } from './embr';
import { fiveMinutesInMs } from '../util/time';
import { Cache, CacheClass } from 'memory-cache';
import { blocksSubgraphService } from '../blocks-subgraph/blocks-subgraph.service';
import { cache } from '../cache/cache';
import axios from 'axios';
import { utils } from 'ethers';
import { getContractAt } from '../ethers/ethers';
import { fp } from '../util/numbers';
import embrAbi from './abi/EmbrToken.json';


const PROTOCOL_DATA_CACHE_KEY = 'embrProtocolData';
const CONFIG_CACHE_KEY = 'embrConfig';

export class EmbrService {
    cache: CacheClass<string, any>;

    constructor() {
        this.cache = new Cache<string, any>();
    }

    public async getProtocolData(): Promise<GqlEmbrProtocolData> {
        const memCached = this.cache.get(PROTOCOL_DATA_CACHE_KEY) as GqlEmbrProtocolData | null;

        if (memCached) {
            return memCached;
        }

        const cached = await cache.getObjectValue<GqlEmbrProtocolData>(PROTOCOL_DATA_CACHE_KEY);

        if (cached) {
            this.cache.put(PROTOCOL_DATA_CACHE_KEY, cached, 15000);

            return cached;
        }

        return this.cacheProtocolData();
    }

    public async cacheProtocolData(): Promise<GqlEmbrProtocolData> {

        const { embrPrice, marketCap, circulatingSupply } = await this.getEmbrData();
        const { totalLiquidity, totalSwapFee, totalSwapVolume, poolCount } =
            await balancerSubgraphService.getProtocolData({});
       console.log("embrPrice: "+embrPrice) 
       console.log("marketCap: "+marketCap)

        const block = await blocksSubgraphService.getBlockFrom24HoursAgo();
        console.log("block: "+block.number)


       const prev = await balancerSubgraphService.getProtocolData({ block: { number: parseInt(block.number) } });
      

        const protocolData: GqlEmbrProtocolData = {
            totalLiquidity,
            totalSwapFee,
            totalSwapVolume,
            embrPrice,
            marketCap,
            circulatingSupply,
            poolCount: `${poolCount}`,
            swapVolume24h: `${parseFloat(totalSwapVolume) - parseFloat(prev.totalSwapVolume)}`,
            swapFee24h: `${parseFloat(totalSwapFee) - parseFloat(prev.totalSwapFee)}`,
        };

        await cache.putObjectValue(PROTOCOL_DATA_CACHE_KEY, protocolData, 30);

        return protocolData;
    }

    public async getConfig(): Promise<GqlEmbrConfig> {
        const cached = this.cache.get(CONFIG_CACHE_KEY) as GqlEmbrConfig | null;

        if (cached) {
            return cached;
        }
        const { data } = await axios.get(env.POOL_CONFIG);
        const embrConfig: GqlEmbrConfig = {
            pausedPools: data?.result?.pausedPools ?? [],
            featuredPools: data?.result?.featuredPools ?? [],
            incentivizedPools: data?.result?.incentivizedPools ?? [],
            blacklistedPools: data?.result?.blacklistedPools ?? [],
            poolFilters: data?.result?.poolFilters ?? [],
            homeNewsItems: data?.result?.homeNewsItems ?? [],
            homeFeaturedPools: data?.result?.homeFeaturedPools ?? []        };
        

        this.cache.put(CONFIG_CACHE_KEY, embrConfig, fiveMinutesInMs);

        return embrConfig;
    }

    private async getEmbrData(): Promise<{
        embrPrice: string;
        marketCap: string;
        circulatingSupply: string;
    }> {
        //if (env.CHAIN_ID !== '250') {
        //    return { embrPrice: '0', marketCap: '0', circulatingSupply: '0' };
        //}

            const { pool: embrAusdPool } = await balancerSubgraphService.getPool({
                id: '0xb8dfe6d3b75a2e4d7968559f7be7b2be11fc1104000200000000000000000000',
            });

            const embr = (embrAusdPool?.tokens ?? []).find((token) => token.address === env.EMBR_ADDRESS.toLowerCase());
            const ausd = (embrAusdPool?.tokens ?? []).find((token) => token.address !== env.EMBR_ADDRESS.toLowerCase());


            const { pool: embrWavaxPool } = await balancerSubgraphService.getPool({
                id: '0x60de191c0c72f75f0d3c8094f91524bf2d122c98000200000000000000000001',
            });

           
            if (!embr || !ausd || !embrWavaxPool) {
                console.log("Embr: "+embr);
                console.log("Embr: "+ausd);
                console.log("Embr: "+embrWavaxPool);


                throw new Error('did not find price for embr 3');
            }            
            //xploited getEmbrData 0.8 0.5 296.342522769214859558 2015316.698115856827299486
           // const bptPrice = parseFloat(embrWavaxPool.totalLiquidity) / parseFloat(embrWavaxPool.totalShares);

            const embrPrice =
            ((parseFloat(embr.weight || '0') / parseFloat(ausd.weight || '1')) * parseFloat(ausd.balance)) /
            parseFloat(embr.balance);
             const circulatingSupply = parseFloat(await getCirculatingSupply());

             console.log("xploited getEmbrData", embr.weight, embr.balance, embrPrice, circulatingSupply)

            return {
                embrPrice: `${embrPrice}`,
                marketCap: `${embrPrice * circulatingSupply}`,
                circulatingSupply: `${circulatingSupply}`,
            };
    }

    public async getCirculatingSupply() {
        try {
            const totalSupply = await embrContract.totalSupply();
            return utils.formatUnits(totalSupply);
        } catch (e) { 
            console.log("awfewaef", e)
        }
       
        return "0";
    }
}

const embrContract = getContractAt(env.EMBR_ADDRESS, embrAbi);

export const embrService = new EmbrService();