import { Resolvers } from '../../schema';
import { embrService } from './embr.service';
import { getRequiredAccountAddress } from '../util/resolver-util';
import { embrFarmService } from './embr-farm.service';

const balancerResolvers: Resolvers = {
    Query: {
        embrGetProtocolData: async () => {
            const protocolData = await embrService.getProtocolData();

            return protocolData;
        },
        embrGetEmbrFarms: async () => {
            return embrFarmService.getEmbrFarms();
        },
        embrGetUserDataForFarm: async (parent: any, { farmId }, context) => {
            const address = getRequiredAccountAddress(context);

            return embrFarmService.getEmbrFarmUser(farmId, address);
        },
        embrGetUserDataForAllFarms: async (parent: any, {}, context) => {
            const address = getRequiredAccountAddress(context);

            return embrFarmService.getEmbrFarmsForUser(address);
        },
        embrGetConfig: async () => {
            return embrService.getConfig();
        },
    },
};

export default balancerResolvers;
