export interface PrismaBalancerPool {
    id: string,
    address: string,
    symbol: string,
    name: string,
    owner: string,

}

export interface PrismaBalancerPoolShareSnapshot  {
    userAddress: string,
    poolId: string,
    poolSnapshotId: string,
    poolSnapshot: PrismaBalancerPoolSnapshotWithTokens,
    blockNumber: number,
    balance: string,

}

export interface UserPortfolioData {
    date: string;
    timestamp: number;
    totalValue: number;
    totalSwapFees: number;
    totalSwapVolume: number;
    myFees: number;

    pools: UserPoolData[];
    tokens: UserTokenData[];
    //xembr: UserXembrData;
}

export interface UserXembrData {
    id: string;
    totalRewardValue: number;
    xembrBalance: number;
    shares: number;
    percentShare: number;
    questMultiplier: number;
    timeMultiplier: number;
    rewardTokens: UserRewardTokenData[];
  }
  
  export interface UserRewardTokenData {
    id: string;
    address: string;
    symbol: string;
    name: string;
    claimed: number;
    pending: number;
    totalValue: number;
  }


export interface UserPoolData {
    id: string;
    poolId: string;
    poolAddress: string;
    name: string;
    shares: number;
    percentShare: number;
    totalValue: number;
    pricePerShare: number;
    tokens: UserTokenData[];
    swapFees: number;
    swapVolume: number;
    myFees: number;
    percentOfPortfolio: number;
    priceChange: number;
    priceChangePercent: number;
}

export interface UserTokenData {
    id: string;
    address: string;
    symbol: string;
    name: string;
    balance: number;
    pricePerToken: number;
    totalValue: number;
    percentOfPortfolio: number;
}

export interface PrismaFarm {
    id: string,
    pair: string,
    poolId: string,
}

export interface PrismaFarmUserSnapshot {
    userAddress: string,
    farmUserId: string,
    blockNumber: number,
    farmId: string,
    amount: string,
    rewardDebt: string,
    embrHarvested: string,
}

export interface PrismaBalancerPoolTokenSnapshot {
    id: string,
    address: string,
    snapshotId: string,
    poolId: string,
    blockNumber: number,
    balance: string,
    invested: string,
}

export interface PrismaToken {
    address: string,
    symbol: string,
    name: string,
}

export interface PrismaBalancerPoolSnapshot {
    id: string,
    poolId: string,
    blockNumber: number,
    swapFee: string,
    totalSwapVolume: string,
    totalSwapFee: string,
    totalLiquidity: string,
    totalShares: string,
    swapsCount: string,
    holdersCount: string,
    swapEnabled: Boolean,
}


export type PrismaFarmUserSnapshotWithFarm = PrismaFarmUserSnapshot & { farm: PrismaFarm };
export type PrismaBalancerPoolTokenSnapshotWithToken = PrismaBalancerPoolTokenSnapshot & { token: PrismaToken };
export type PrismaBalancerPoolSnapshotWithTokens = PrismaBalancerPoolSnapshot & {
    tokens: PrismaBalancerPoolTokenSnapshotWithToken[];
};


export interface PrismaBlockExtended { 
    id: string,
    number: number,
    timestamp: number
    poolShares: PrismaBalancerPoolShareSnapshot[],
    farmUsers:  PrismaFarmUserSnapshotWithFarm[],
    
}