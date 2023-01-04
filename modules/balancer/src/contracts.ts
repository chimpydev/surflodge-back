import { BalancerNetworkConfig } from '../balancer-types';

export const BALANCER_NETWORK_CONFIG: Record<string, BalancerNetworkConfig> = {
    '250': {
        vault: '0x20dd72Ed959b6147912C2e529F0a0C651c33c9ce',
        weth: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
        multicall: '0x09523Acc78Dd297Ae5Da00DdeBE6f10ebF784565',
    },
    '4': {
        vault: '0xF07513C68C55A31337E3b58034b176A15Dce16eD',
        weth: '0x80dD2B80FbcFB06505A301d732322e987380EcD6',
        multicall: '0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821',
    },
    '43113': {
        vault: '0x9aed52F3074ba468c6ad17822b8833210868c31b',
        weth: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
        multicall: '0x98c23524db6852e04327e8021391e1715e0eace7',
    },
    '43114': {
        vault: '0xad68ea482860cd7077a5D0684313dD3a9BC70fbB',
        weth: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
        multicall: '0x653f3e6c7e2ae666c22e063d87a012c2f13ea416',
    },
    '106': {
        vault: '0xA4A48dfcAE6490AfE9C779BF0f324B48683e488c',
        weth: '0xc579D1f3CF86749E05CD06f7ADe17856c2CE3126',
        multicall: '0x5AaDD9826e8804b06471F7CddAEC6F306773CE63',
    },
    '137': {
        vault: '0xADfFd760F642b5305b0AbDa21cf956Dd836B5de5',
        weth: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
        multicall: '0xFb9E3Ef29C5f98291eCc20c39f833D304d9DbB80',
    },
};
