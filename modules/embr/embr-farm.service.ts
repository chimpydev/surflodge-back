import { GqlBalancePoolAprItem, GqlEmbrFarm, GqlEmbrFarmUser } from '../../schema';
import { masterchefService } from '../masterchef-subgraph/masterchef.service';
import { oneDayInMinutes, secondsPerYear } from '../util/time';
import { Cache, CacheClass } from 'memory-cache';
import { cache } from '../cache/cache';
import { tokenPriceService } from '../token-price/token-price.service';
import { tokenService } from '../token/token.service';

const FARMS_CACHE_KEY = 'embrFarms';
const FARM_USERS_CACHE_KEY = 'embrFarmUsers';
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export class EmbrFarmService {
    cache: CacheClass<string, any>;

    constructor() {
        this.cache = new Cache<string, any>();
    }

    public async getEmbrFarms(): Promise<GqlEmbrFarm[]> {
        const farms = await cache.getObjectValue<GqlEmbrFarm[]>(FARMS_CACHE_KEY);

        if (farms) {
            return farms;
        }

        return this.cacheEmbrFarms();
    }

    public async cacheEmbrFarms(): Promise<GqlEmbrFarm[]> {
        const tokenPrices = await tokenPriceService.getTokenPrices();
        const tokens = await tokenService.getTokens();
        const farms = await masterchefService.getAllFarms({});

        const mapped: GqlEmbrFarm[] = farms.map((farm) => ({
            ...farm,
            __typename: 'GqlEmbrFarm',
            embrPerSec: farm.masterChef.embrPerSec,
            allocPoint: parseInt(farm.allocPoint),
            masterChef: {
                ...farm.masterChef,
                __typename: 'GqlEmbrMasterChef',
                totalAllocPoint: parseInt(farm.masterChef.totalAllocPoint),
            },
        }));

        await cache.putObjectValue(FARMS_CACHE_KEY, mapped, oneDayInMinutes);

        return mapped;
    }

    public async getEmbrFarmUsers(): Promise<GqlEmbrFarmUser[]> {
        const memCached = this.cache.get(FARM_USERS_CACHE_KEY) as GqlEmbrFarmUser[] | null;

        if (memCached) {
            return memCached;
        }

        const cached = await cache.getObjectValue<GqlEmbrFarmUser[]>(FARM_USERS_CACHE_KEY);

        if (cached) {
            this.cache.put(FARM_USERS_CACHE_KEY, cached, 15000);

            return cached;
        }

        return this.cacheEmbrFarmUsers();
    }

    public async getEmbrFarmsForUser(userAddress: string): Promise<GqlEmbrFarmUser[]> {
        const farmUsers = await this.getEmbrFarmUsers();

        return farmUsers.filter((farmUser) => farmUser.address.toLowerCase() === userAddress);
    }

    public async getEmbrFarmUser(farmId: string, userAddress: string): Promise<GqlEmbrFarmUser | null> {
        const farmUsers = await this.getEmbrFarmUsers();
        const farmUser = farmUsers.find(
            (farmUser) => farmUser.farmId === farmId.toLowerCase() && farmUser.address === userAddress.toLowerCase(),
        );

        return farmUser ?? null;
    }

    public async cacheEmbrFarmUsers(): Promise<GqlEmbrFarmUser[]> {
        const farmUsers = await masterchefService.getAllFarmUsers({});
        const mapped: GqlEmbrFarmUser[] = farmUsers.map((farmUser) => ({
            ...farmUser,
            __typename: 'GqlEmbrFarmUser',
            farmId: farmUser.pool?.id || '',
        }));

        await cache.putObjectValue(FARM_USERS_CACHE_KEY, mapped, 30);

        return mapped;
    }

    public calculateFarmApr(
        farm: GqlEmbrFarm,
        farmTvl: number,
        blocksPerYear: number,
        embrPrice: number,
    ): { items: GqlBalancePoolAprItem[]; embrApr: string; thirdPartyApr: string } {
        if (farmTvl <= 0) {
            return { items: [], embrApr: '0', thirdPartyApr: '0' };
        }

        const embrPerSec = Number(parseInt(farm.masterChef.embrPerSec || '0') / 1e18);
        const embrPerYear = embrPerSec * secondsPerYear;
        const farmEmbrPerYear = (farm.allocPoint / farm.masterChef.totalAllocPoint) * embrPerYear;
        const embrValuePerYear = embrPrice * farmEmbrPerYear;

        const items: GqlBalancePoolAprItem[] = [];
        const embrApr = embrValuePerYear / farmTvl;
        let thirdPartyApr = 0;

        if (embrApr > 0) {
            items.push({
                title: 'WAVE reward APR',
                apr: `${embrApr}`,
            });
        }

        return { items, thirdPartyApr: `${thirdPartyApr}`, embrApr: `${embrApr > 0 ? embrApr : 0}` };
    }
}

export const embrFarmService = new EmbrFarmService();
