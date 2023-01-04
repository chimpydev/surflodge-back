import { utils } from 'ethers';
import { getContractAt } from '../ethers/ethers';
import { fp } from '../util/numbers';
import embrAbi from './abi/EmbrToken.json';
import { env } from '../../app/env';

const embrContract = getContractAt(env.EMBR_ADDRESS, embrAbi);

export async function getCirculatingSupply() {
    try {
        const totalSupply = await embrContract.totalSupply();
        return utils.formatUnits(totalSupply);
    } catch (e) { 
        console.log("awfewaef", e)
    }
   
    return "0";
}
