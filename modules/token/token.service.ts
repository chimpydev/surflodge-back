import { cache } from '../cache/cache';
import { env } from '../../app/env';
import { TokenDefinition } from './token-types';
//import { sanityClient } from '../sanity/sanity';
import { thirtyDaysInMinutes } from '../util/time';
import axios from 'axios';

const TOKEN_DEFINITIONS_CACHE_KEY = 'token-definitions';

const SANITY_TOKEN_TYPE: { [key: string]: string } = {
    '250': 'fantomToken',
    '4': 'rinkebyToken',
};

export class TokenService {
    public async getTokens(): Promise<TokenDefinition[]> {
        const cached = await cache.getObjectValue<TokenDefinition[]>(TOKEN_DEFINITIONS_CACHE_KEY);

        if (cached) {
            return cached;
        }

        return this.cacheTokens();
    }

    public async cacheTokens(): Promise<TokenDefinition[]> {
        /*const tokens = await sanityClient.fetch<TokenDefinition[]>(`
            *[_type=="${SANITY_TOKEN_TYPE[env.CHAIN_ID]}"] {
                name,
                address,
                symbol,
                decimals,
                "chainId": ${env.CHAIN_ID},
                logoURI,
                coingeckoPlatformId,
                coingeckoContractAddress
            }
        `);*/
        const { data } = await axios.get(env.TOKEN_CONFIG);
           console.log("LISTA DE TOKENS: ", data.result.tokens);
        console.log("LENGTH: ", data.result.tokens.length);
        console.log("RESULT: ", data.result);
        let result: TokenDefinition[] = []
        for (let i =0; i < data.result.tokens.length; i++) { 
            result.push(
                {
                    name: data.result.tokens[i].name,
                    address: data.result.tokens[i].address,
                    symbol:data.result.tokens[i].symbol,
                    decimals:data.result.tokens[i].decimals,
                    logoURI:data.result.tokens[i].logoURI,
                    chainId:data.result.tokens[i].chainId,
                }
            )   
        }
        
        await cache.putObjectValue(TOKEN_DEFINITIONS_CACHE_KEY, result, thirtyDaysInMinutes);
        return result;
    }
}

export const tokenService = new TokenService();
