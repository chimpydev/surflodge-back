import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    BigDecimal: string;
    BigInt: string;
    Bytes: string;
};

export type BlockChangedFilter = {
    number_gte: Scalars['Int'];
};

export type Block_Height = {
    hash?: InputMaybe<Scalars['Bytes']>;
    number?: InputMaybe<Scalars['Int']>;
    number_gte?: InputMaybe<Scalars['Int']>;
};

export type Claimed = {
    __typename?: 'Claimed';
    address: Scalars['Bytes'];
    block: Scalars['BigInt'];
    id: Scalars['ID'];
    owner?: Maybe<XUser>;
    timestamp: Scalars['BigInt'];
    total: Scalars['BigInt'];
};

export type Claimed_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    address?: InputMaybe<Scalars['Bytes']>;
    address_contains?: InputMaybe<Scalars['Bytes']>;
    address_in?: InputMaybe<Array<Scalars['Bytes']>>;
    address_not?: InputMaybe<Scalars['Bytes']>;
    address_not_contains?: InputMaybe<Scalars['Bytes']>;
    address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    owner?: InputMaybe<Scalars['String']>;
    owner_?: InputMaybe<XUser_Filter>;
    owner_contains?: InputMaybe<Scalars['String']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']>;
    owner_ends_with?: InputMaybe<Scalars['String']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
    owner_gt?: InputMaybe<Scalars['String']>;
    owner_gte?: InputMaybe<Scalars['String']>;
    owner_in?: InputMaybe<Array<Scalars['String']>>;
    owner_lt?: InputMaybe<Scalars['String']>;
    owner_lte?: InputMaybe<Scalars['String']>;
    owner_not?: InputMaybe<Scalars['String']>;
    owner_not_contains?: InputMaybe<Scalars['String']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    owner_starts_with?: InputMaybe<Scalars['String']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    total?: InputMaybe<Scalars['BigInt']>;
    total_gt?: InputMaybe<Scalars['BigInt']>;
    total_gte?: InputMaybe<Scalars['BigInt']>;
    total_in?: InputMaybe<Array<Scalars['BigInt']>>;
    total_lt?: InputMaybe<Scalars['BigInt']>;
    total_lte?: InputMaybe<Scalars['BigInt']>;
    total_not?: InputMaybe<Scalars['BigInt']>;
    total_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Claimed_OrderBy {
    Address = 'address',
    Block = 'block',
    Id = 'id',
    Owner = 'owner',
    Timestamp = 'timestamp',
    Total = 'total',
}

export type Governance = {
    __typename?: 'Governance';
    block: Scalars['BigInt'];
    id: Scalars['ID'];
    purposalCount: Scalars['BigInt'];
    purposals?: Maybe<Array<Purposal>>;
    quorumVotes: Scalars['BigInt'];
    timestamp: Scalars['BigInt'];
};

export type GovernancePurposalsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Purposal_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<Purposal_Filter>;
};

export type Governance_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    purposalCount?: InputMaybe<Scalars['BigInt']>;
    purposalCount_gt?: InputMaybe<Scalars['BigInt']>;
    purposalCount_gte?: InputMaybe<Scalars['BigInt']>;
    purposalCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    purposalCount_lt?: InputMaybe<Scalars['BigInt']>;
    purposalCount_lte?: InputMaybe<Scalars['BigInt']>;
    purposalCount_not?: InputMaybe<Scalars['BigInt']>;
    purposalCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    purposals_?: InputMaybe<Purposal_Filter>;
    quorumVotes?: InputMaybe<Scalars['BigInt']>;
    quorumVotes_gt?: InputMaybe<Scalars['BigInt']>;
    quorumVotes_gte?: InputMaybe<Scalars['BigInt']>;
    quorumVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
    quorumVotes_lt?: InputMaybe<Scalars['BigInt']>;
    quorumVotes_lte?: InputMaybe<Scalars['BigInt']>;
    quorumVotes_not?: InputMaybe<Scalars['BigInt']>;
    quorumVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Governance_OrderBy {
    Block = 'block',
    Id = 'id',
    PurposalCount = 'purposalCount',
    Purposals = 'purposals',
    QuorumVotes = 'quorumVotes',
    Timestamp = 'timestamp',
}

export type Lock = {
    __typename?: 'Lock';
    action: Scalars['Int'];
    amount: Scalars['BigInt'];
    block: Scalars['BigInt'];
    id: Scalars['ID'];
    locktime: Scalars['BigInt'];
    owner?: Maybe<XUser>;
    timestamp: Scalars['BigInt'];
};

export type Lock_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    action?: InputMaybe<Scalars['Int']>;
    action_gt?: InputMaybe<Scalars['Int']>;
    action_gte?: InputMaybe<Scalars['Int']>;
    action_in?: InputMaybe<Array<Scalars['Int']>>;
    action_lt?: InputMaybe<Scalars['Int']>;
    action_lte?: InputMaybe<Scalars['Int']>;
    action_not?: InputMaybe<Scalars['Int']>;
    action_not_in?: InputMaybe<Array<Scalars['Int']>>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    locktime?: InputMaybe<Scalars['BigInt']>;
    locktime_gt?: InputMaybe<Scalars['BigInt']>;
    locktime_gte?: InputMaybe<Scalars['BigInt']>;
    locktime_in?: InputMaybe<Array<Scalars['BigInt']>>;
    locktime_lt?: InputMaybe<Scalars['BigInt']>;
    locktime_lte?: InputMaybe<Scalars['BigInt']>;
    locktime_not?: InputMaybe<Scalars['BigInt']>;
    locktime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    owner?: InputMaybe<Scalars['String']>;
    owner_?: InputMaybe<XUser_Filter>;
    owner_contains?: InputMaybe<Scalars['String']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']>;
    owner_ends_with?: InputMaybe<Scalars['String']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
    owner_gt?: InputMaybe<Scalars['String']>;
    owner_gte?: InputMaybe<Scalars['String']>;
    owner_in?: InputMaybe<Array<Scalars['String']>>;
    owner_lt?: InputMaybe<Scalars['String']>;
    owner_lte?: InputMaybe<Scalars['String']>;
    owner_not?: InputMaybe<Scalars['String']>;
    owner_not_contains?: InputMaybe<Scalars['String']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    owner_starts_with?: InputMaybe<Scalars['String']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Lock_OrderBy {
    Action = 'action',
    Amount = 'amount',
    Block = 'block',
    Id = 'id',
    Locktime = 'locktime',
    Owner = 'owner',
    Timestamp = 'timestamp',
}

export type MasterChef = {
    __typename?: 'MasterChef';
    block: Scalars['BigInt'];
    embrPerSec: Scalars['BigInt'];
    id: Scalars['ID'];
    poolCount: Scalars['BigInt'];
    pools?: Maybe<Array<Pool>>;
    timestamp: Scalars['BigInt'];
    totalAllocPoint: Scalars['BigInt'];
};

export type MasterChefPoolsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Pool_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<Pool_Filter>;
};

export type MasterChef_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    embrPerSec?: InputMaybe<Scalars['BigInt']>;
    embrPerSec_gt?: InputMaybe<Scalars['BigInt']>;
    embrPerSec_gte?: InputMaybe<Scalars['BigInt']>;
    embrPerSec_in?: InputMaybe<Array<Scalars['BigInt']>>;
    embrPerSec_lt?: InputMaybe<Scalars['BigInt']>;
    embrPerSec_lte?: InputMaybe<Scalars['BigInt']>;
    embrPerSec_not?: InputMaybe<Scalars['BigInt']>;
    embrPerSec_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    poolCount?: InputMaybe<Scalars['BigInt']>;
    poolCount_gt?: InputMaybe<Scalars['BigInt']>;
    poolCount_gte?: InputMaybe<Scalars['BigInt']>;
    poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    poolCount_lt?: InputMaybe<Scalars['BigInt']>;
    poolCount_lte?: InputMaybe<Scalars['BigInt']>;
    poolCount_not?: InputMaybe<Scalars['BigInt']>;
    poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    pools_?: InputMaybe<Pool_Filter>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalAllocPoint?: InputMaybe<Scalars['BigInt']>;
    totalAllocPoint_gt?: InputMaybe<Scalars['BigInt']>;
    totalAllocPoint_gte?: InputMaybe<Scalars['BigInt']>;
    totalAllocPoint_in?: InputMaybe<Array<Scalars['BigInt']>>;
    totalAllocPoint_lt?: InputMaybe<Scalars['BigInt']>;
    totalAllocPoint_lte?: InputMaybe<Scalars['BigInt']>;
    totalAllocPoint_not?: InputMaybe<Scalars['BigInt']>;
    totalAllocPoint_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum MasterChef_OrderBy {
    Block = 'block',
    EmbrPerSec = 'embrPerSec',
    Id = 'id',
    PoolCount = 'poolCount',
    Pools = 'pools',
    Timestamp = 'timestamp',
    TotalAllocPoint = 'totalAllocPoint',
}

export type Migrations = {
    __typename?: 'Migrations';
    block: Scalars['BigInt'];
    claimed: Scalars['BigInt'];
    id: Scalars['ID'];
    timestamp: Scalars['BigInt'];
    unclaimed: Scalars['BigInt'];
};

export type Migrations_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    claimed?: InputMaybe<Scalars['BigInt']>;
    claimed_gt?: InputMaybe<Scalars['BigInt']>;
    claimed_gte?: InputMaybe<Scalars['BigInt']>;
    claimed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    claimed_lt?: InputMaybe<Scalars['BigInt']>;
    claimed_lte?: InputMaybe<Scalars['BigInt']>;
    claimed_not?: InputMaybe<Scalars['BigInt']>;
    claimed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    unclaimed?: InputMaybe<Scalars['BigInt']>;
    unclaimed_gt?: InputMaybe<Scalars['BigInt']>;
    unclaimed_gte?: InputMaybe<Scalars['BigInt']>;
    unclaimed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    unclaimed_lt?: InputMaybe<Scalars['BigInt']>;
    unclaimed_lte?: InputMaybe<Scalars['BigInt']>;
    unclaimed_not?: InputMaybe<Scalars['BigInt']>;
    unclaimed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Migrations_OrderBy {
    Block = 'block',
    Claimed = 'claimed',
    Id = 'id',
    Timestamp = 'timestamp',
    Unclaimed = 'unclaimed',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
    Asc = 'asc',
    Desc = 'desc',
}

export type Pool = {
    __typename?: 'Pool';
    accEmbrPerShare: Scalars['BigInt'];
    allocPoint: Scalars['BigInt'];
    block: Scalars['BigInt'];
    id: Scalars['ID'];
    lastRewardBlock: Scalars['BigInt'];
    masterChef: MasterChef;
    pair: Scalars['Bytes'];
    rewarder?: Maybe<Rewarder>;
    slpBalance: Scalars['BigInt'];
    timestamp: Scalars['BigInt'];
    userCount: Scalars['BigInt'];
    users: Array<User>;
};

export type PoolUsersArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<User_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<User_Filter>;
};

export type Pool_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    accEmbrPerShare?: InputMaybe<Scalars['BigInt']>;
    accEmbrPerShare_gt?: InputMaybe<Scalars['BigInt']>;
    accEmbrPerShare_gte?: InputMaybe<Scalars['BigInt']>;
    accEmbrPerShare_in?: InputMaybe<Array<Scalars['BigInt']>>;
    accEmbrPerShare_lt?: InputMaybe<Scalars['BigInt']>;
    accEmbrPerShare_lte?: InputMaybe<Scalars['BigInt']>;
    accEmbrPerShare_not?: InputMaybe<Scalars['BigInt']>;
    accEmbrPerShare_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    allocPoint?: InputMaybe<Scalars['BigInt']>;
    allocPoint_gt?: InputMaybe<Scalars['BigInt']>;
    allocPoint_gte?: InputMaybe<Scalars['BigInt']>;
    allocPoint_in?: InputMaybe<Array<Scalars['BigInt']>>;
    allocPoint_lt?: InputMaybe<Scalars['BigInt']>;
    allocPoint_lte?: InputMaybe<Scalars['BigInt']>;
    allocPoint_not?: InputMaybe<Scalars['BigInt']>;
    allocPoint_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    lastRewardBlock?: InputMaybe<Scalars['BigInt']>;
    lastRewardBlock_gt?: InputMaybe<Scalars['BigInt']>;
    lastRewardBlock_gte?: InputMaybe<Scalars['BigInt']>;
    lastRewardBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
    lastRewardBlock_lt?: InputMaybe<Scalars['BigInt']>;
    lastRewardBlock_lte?: InputMaybe<Scalars['BigInt']>;
    lastRewardBlock_not?: InputMaybe<Scalars['BigInt']>;
    lastRewardBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    masterChef?: InputMaybe<Scalars['String']>;
    masterChef_?: InputMaybe<MasterChef_Filter>;
    masterChef_contains?: InputMaybe<Scalars['String']>;
    masterChef_contains_nocase?: InputMaybe<Scalars['String']>;
    masterChef_ends_with?: InputMaybe<Scalars['String']>;
    masterChef_ends_with_nocase?: InputMaybe<Scalars['String']>;
    masterChef_gt?: InputMaybe<Scalars['String']>;
    masterChef_gte?: InputMaybe<Scalars['String']>;
    masterChef_in?: InputMaybe<Array<Scalars['String']>>;
    masterChef_lt?: InputMaybe<Scalars['String']>;
    masterChef_lte?: InputMaybe<Scalars['String']>;
    masterChef_not?: InputMaybe<Scalars['String']>;
    masterChef_not_contains?: InputMaybe<Scalars['String']>;
    masterChef_not_contains_nocase?: InputMaybe<Scalars['String']>;
    masterChef_not_ends_with?: InputMaybe<Scalars['String']>;
    masterChef_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    masterChef_not_in?: InputMaybe<Array<Scalars['String']>>;
    masterChef_not_starts_with?: InputMaybe<Scalars['String']>;
    masterChef_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    masterChef_starts_with?: InputMaybe<Scalars['String']>;
    masterChef_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pair?: InputMaybe<Scalars['Bytes']>;
    pair_contains?: InputMaybe<Scalars['Bytes']>;
    pair_in?: InputMaybe<Array<Scalars['Bytes']>>;
    pair_not?: InputMaybe<Scalars['Bytes']>;
    pair_not_contains?: InputMaybe<Scalars['Bytes']>;
    pair_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    rewarder?: InputMaybe<Scalars['String']>;
    rewarder_?: InputMaybe<Rewarder_Filter>;
    rewarder_contains?: InputMaybe<Scalars['String']>;
    rewarder_contains_nocase?: InputMaybe<Scalars['String']>;
    rewarder_ends_with?: InputMaybe<Scalars['String']>;
    rewarder_ends_with_nocase?: InputMaybe<Scalars['String']>;
    rewarder_gt?: InputMaybe<Scalars['String']>;
    rewarder_gte?: InputMaybe<Scalars['String']>;
    rewarder_in?: InputMaybe<Array<Scalars['String']>>;
    rewarder_lt?: InputMaybe<Scalars['String']>;
    rewarder_lte?: InputMaybe<Scalars['String']>;
    rewarder_not?: InputMaybe<Scalars['String']>;
    rewarder_not_contains?: InputMaybe<Scalars['String']>;
    rewarder_not_contains_nocase?: InputMaybe<Scalars['String']>;
    rewarder_not_ends_with?: InputMaybe<Scalars['String']>;
    rewarder_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    rewarder_not_in?: InputMaybe<Array<Scalars['String']>>;
    rewarder_not_starts_with?: InputMaybe<Scalars['String']>;
    rewarder_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    rewarder_starts_with?: InputMaybe<Scalars['String']>;
    rewarder_starts_with_nocase?: InputMaybe<Scalars['String']>;
    slpBalance?: InputMaybe<Scalars['BigInt']>;
    slpBalance_gt?: InputMaybe<Scalars['BigInt']>;
    slpBalance_gte?: InputMaybe<Scalars['BigInt']>;
    slpBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
    slpBalance_lt?: InputMaybe<Scalars['BigInt']>;
    slpBalance_lte?: InputMaybe<Scalars['BigInt']>;
    slpBalance_not?: InputMaybe<Scalars['BigInt']>;
    slpBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    userCount?: InputMaybe<Scalars['BigInt']>;
    userCount_gt?: InputMaybe<Scalars['BigInt']>;
    userCount_gte?: InputMaybe<Scalars['BigInt']>;
    userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    userCount_lt?: InputMaybe<Scalars['BigInt']>;
    userCount_lte?: InputMaybe<Scalars['BigInt']>;
    userCount_not?: InputMaybe<Scalars['BigInt']>;
    userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    users_?: InputMaybe<User_Filter>;
};

export enum Pool_OrderBy {
    AccEmbrPerShare = 'accEmbrPerShare',
    AllocPoint = 'allocPoint',
    Block = 'block',
    Id = 'id',
    LastRewardBlock = 'lastRewardBlock',
    MasterChef = 'masterChef',
    Pair = 'pair',
    Rewarder = 'rewarder',
    SlpBalance = 'slpBalance',
    Timestamp = 'timestamp',
    UserCount = 'userCount',
    Users = 'users',
}

export type Purposal = {
    __typename?: 'Purposal';
    againstVotes: Scalars['BigInt'];
    block: Scalars['BigInt'];
    details: Scalars['String'];
    duration: Scalars['BigInt'];
    endDate: Scalars['BigInt'];
    executed: Scalars['Boolean'];
    executor: Scalars['Bytes'];
    forVotes: Scalars['BigInt'];
    governance?: Maybe<Governance>;
    id: Scalars['ID'];
    index: Scalars['BigInt'];
    metadata: Scalars['String'];
    proposer: XUser;
    startDate: Scalars['BigInt'];
    state: Scalars['BigInt'];
    timestamp: Scalars['BigInt'];
    title: Scalars['String'];
};

export type Purposal_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    againstVotes?: InputMaybe<Scalars['BigInt']>;
    againstVotes_gt?: InputMaybe<Scalars['BigInt']>;
    againstVotes_gte?: InputMaybe<Scalars['BigInt']>;
    againstVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
    againstVotes_lt?: InputMaybe<Scalars['BigInt']>;
    againstVotes_lte?: InputMaybe<Scalars['BigInt']>;
    againstVotes_not?: InputMaybe<Scalars['BigInt']>;
    againstVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    details?: InputMaybe<Scalars['String']>;
    details_contains?: InputMaybe<Scalars['String']>;
    details_contains_nocase?: InputMaybe<Scalars['String']>;
    details_ends_with?: InputMaybe<Scalars['String']>;
    details_ends_with_nocase?: InputMaybe<Scalars['String']>;
    details_gt?: InputMaybe<Scalars['String']>;
    details_gte?: InputMaybe<Scalars['String']>;
    details_in?: InputMaybe<Array<Scalars['String']>>;
    details_lt?: InputMaybe<Scalars['String']>;
    details_lte?: InputMaybe<Scalars['String']>;
    details_not?: InputMaybe<Scalars['String']>;
    details_not_contains?: InputMaybe<Scalars['String']>;
    details_not_contains_nocase?: InputMaybe<Scalars['String']>;
    details_not_ends_with?: InputMaybe<Scalars['String']>;
    details_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    details_not_in?: InputMaybe<Array<Scalars['String']>>;
    details_not_starts_with?: InputMaybe<Scalars['String']>;
    details_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    details_starts_with?: InputMaybe<Scalars['String']>;
    details_starts_with_nocase?: InputMaybe<Scalars['String']>;
    duration?: InputMaybe<Scalars['BigInt']>;
    duration_gt?: InputMaybe<Scalars['BigInt']>;
    duration_gte?: InputMaybe<Scalars['BigInt']>;
    duration_in?: InputMaybe<Array<Scalars['BigInt']>>;
    duration_lt?: InputMaybe<Scalars['BigInt']>;
    duration_lte?: InputMaybe<Scalars['BigInt']>;
    duration_not?: InputMaybe<Scalars['BigInt']>;
    duration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    endDate?: InputMaybe<Scalars['BigInt']>;
    endDate_gt?: InputMaybe<Scalars['BigInt']>;
    endDate_gte?: InputMaybe<Scalars['BigInt']>;
    endDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
    endDate_lt?: InputMaybe<Scalars['BigInt']>;
    endDate_lte?: InputMaybe<Scalars['BigInt']>;
    endDate_not?: InputMaybe<Scalars['BigInt']>;
    endDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    executed?: InputMaybe<Scalars['Boolean']>;
    executed_in?: InputMaybe<Array<Scalars['Boolean']>>;
    executed_not?: InputMaybe<Scalars['Boolean']>;
    executed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    executor?: InputMaybe<Scalars['Bytes']>;
    executor_contains?: InputMaybe<Scalars['Bytes']>;
    executor_in?: InputMaybe<Array<Scalars['Bytes']>>;
    executor_not?: InputMaybe<Scalars['Bytes']>;
    executor_not_contains?: InputMaybe<Scalars['Bytes']>;
    executor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    forVotes?: InputMaybe<Scalars['BigInt']>;
    forVotes_gt?: InputMaybe<Scalars['BigInt']>;
    forVotes_gte?: InputMaybe<Scalars['BigInt']>;
    forVotes_in?: InputMaybe<Array<Scalars['BigInt']>>;
    forVotes_lt?: InputMaybe<Scalars['BigInt']>;
    forVotes_lte?: InputMaybe<Scalars['BigInt']>;
    forVotes_not?: InputMaybe<Scalars['BigInt']>;
    forVotes_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    governance?: InputMaybe<Scalars['String']>;
    governance_?: InputMaybe<Governance_Filter>;
    governance_contains?: InputMaybe<Scalars['String']>;
    governance_contains_nocase?: InputMaybe<Scalars['String']>;
    governance_ends_with?: InputMaybe<Scalars['String']>;
    governance_ends_with_nocase?: InputMaybe<Scalars['String']>;
    governance_gt?: InputMaybe<Scalars['String']>;
    governance_gte?: InputMaybe<Scalars['String']>;
    governance_in?: InputMaybe<Array<Scalars['String']>>;
    governance_lt?: InputMaybe<Scalars['String']>;
    governance_lte?: InputMaybe<Scalars['String']>;
    governance_not?: InputMaybe<Scalars['String']>;
    governance_not_contains?: InputMaybe<Scalars['String']>;
    governance_not_contains_nocase?: InputMaybe<Scalars['String']>;
    governance_not_ends_with?: InputMaybe<Scalars['String']>;
    governance_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    governance_not_in?: InputMaybe<Array<Scalars['String']>>;
    governance_not_starts_with?: InputMaybe<Scalars['String']>;
    governance_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    governance_starts_with?: InputMaybe<Scalars['String']>;
    governance_starts_with_nocase?: InputMaybe<Scalars['String']>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    metadata?: InputMaybe<Scalars['String']>;
    metadata_contains?: InputMaybe<Scalars['String']>;
    metadata_contains_nocase?: InputMaybe<Scalars['String']>;
    metadata_ends_with?: InputMaybe<Scalars['String']>;
    metadata_ends_with_nocase?: InputMaybe<Scalars['String']>;
    metadata_gt?: InputMaybe<Scalars['String']>;
    metadata_gte?: InputMaybe<Scalars['String']>;
    metadata_in?: InputMaybe<Array<Scalars['String']>>;
    metadata_lt?: InputMaybe<Scalars['String']>;
    metadata_lte?: InputMaybe<Scalars['String']>;
    metadata_not?: InputMaybe<Scalars['String']>;
    metadata_not_contains?: InputMaybe<Scalars['String']>;
    metadata_not_contains_nocase?: InputMaybe<Scalars['String']>;
    metadata_not_ends_with?: InputMaybe<Scalars['String']>;
    metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
    metadata_not_starts_with?: InputMaybe<Scalars['String']>;
    metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    metadata_starts_with?: InputMaybe<Scalars['String']>;
    metadata_starts_with_nocase?: InputMaybe<Scalars['String']>;
    proposer?: InputMaybe<Scalars['String']>;
    proposer_?: InputMaybe<XUser_Filter>;
    proposer_contains?: InputMaybe<Scalars['String']>;
    proposer_contains_nocase?: InputMaybe<Scalars['String']>;
    proposer_ends_with?: InputMaybe<Scalars['String']>;
    proposer_ends_with_nocase?: InputMaybe<Scalars['String']>;
    proposer_gt?: InputMaybe<Scalars['String']>;
    proposer_gte?: InputMaybe<Scalars['String']>;
    proposer_in?: InputMaybe<Array<Scalars['String']>>;
    proposer_lt?: InputMaybe<Scalars['String']>;
    proposer_lte?: InputMaybe<Scalars['String']>;
    proposer_not?: InputMaybe<Scalars['String']>;
    proposer_not_contains?: InputMaybe<Scalars['String']>;
    proposer_not_contains_nocase?: InputMaybe<Scalars['String']>;
    proposer_not_ends_with?: InputMaybe<Scalars['String']>;
    proposer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    proposer_not_in?: InputMaybe<Array<Scalars['String']>>;
    proposer_not_starts_with?: InputMaybe<Scalars['String']>;
    proposer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    proposer_starts_with?: InputMaybe<Scalars['String']>;
    proposer_starts_with_nocase?: InputMaybe<Scalars['String']>;
    startDate?: InputMaybe<Scalars['BigInt']>;
    startDate_gt?: InputMaybe<Scalars['BigInt']>;
    startDate_gte?: InputMaybe<Scalars['BigInt']>;
    startDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
    startDate_lt?: InputMaybe<Scalars['BigInt']>;
    startDate_lte?: InputMaybe<Scalars['BigInt']>;
    startDate_not?: InputMaybe<Scalars['BigInt']>;
    startDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    state?: InputMaybe<Scalars['BigInt']>;
    state_gt?: InputMaybe<Scalars['BigInt']>;
    state_gte?: InputMaybe<Scalars['BigInt']>;
    state_in?: InputMaybe<Array<Scalars['BigInt']>>;
    state_lt?: InputMaybe<Scalars['BigInt']>;
    state_lte?: InputMaybe<Scalars['BigInt']>;
    state_not?: InputMaybe<Scalars['BigInt']>;
    state_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    title?: InputMaybe<Scalars['String']>;
    title_contains?: InputMaybe<Scalars['String']>;
    title_contains_nocase?: InputMaybe<Scalars['String']>;
    title_ends_with?: InputMaybe<Scalars['String']>;
    title_ends_with_nocase?: InputMaybe<Scalars['String']>;
    title_gt?: InputMaybe<Scalars['String']>;
    title_gte?: InputMaybe<Scalars['String']>;
    title_in?: InputMaybe<Array<Scalars['String']>>;
    title_lt?: InputMaybe<Scalars['String']>;
    title_lte?: InputMaybe<Scalars['String']>;
    title_not?: InputMaybe<Scalars['String']>;
    title_not_contains?: InputMaybe<Scalars['String']>;
    title_not_contains_nocase?: InputMaybe<Scalars['String']>;
    title_not_ends_with?: InputMaybe<Scalars['String']>;
    title_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    title_not_in?: InputMaybe<Array<Scalars['String']>>;
    title_not_starts_with?: InputMaybe<Scalars['String']>;
    title_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    title_starts_with?: InputMaybe<Scalars['String']>;
    title_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Purposal_OrderBy {
    AgainstVotes = 'againstVotes',
    Block = 'block',
    Details = 'details',
    Duration = 'duration',
    EndDate = 'endDate',
    Executed = 'executed',
    Executor = 'executor',
    ForVotes = 'forVotes',
    Governance = 'governance',
    Id = 'id',
    Index = 'index',
    Metadata = 'metadata',
    Proposer = 'proposer',
    StartDate = 'startDate',
    State = 'state',
    Timestamp = 'timestamp',
    Title = 'title',
}

export type Query = {
    __typename?: 'Query';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    claimed?: Maybe<Claimed>;
    claimeds: Array<Claimed>;
    governance?: Maybe<Governance>;
    governances: Array<Governance>;
    lock?: Maybe<Lock>;
    locks: Array<Lock>;
    masterChef?: Maybe<MasterChef>;
    masterChefs: Array<MasterChef>;
    migrations: Array<Migrations>;
    pool?: Maybe<Pool>;
    pools: Array<Pool>;
    purposal?: Maybe<Purposal>;
    purposals: Array<Purposal>;
    reward?: Maybe<Reward>;
    rewardInfo?: Maybe<RewardInfo>;
    rewardInfos: Array<RewardInfo>;
    rewarder?: Maybe<Rewarder>;
    rewarders: Array<Rewarder>;
    rewards: Array<Reward>;
    user?: Maybe<User>;
    users: Array<User>;
    xembr?: Maybe<XEmbr>;
    xembrs: Array<XEmbr>;
    xuser?: Maybe<XUser>;
    xusers: Array<XUser>;
};

export type Query_MetaArgs = {
    block?: InputMaybe<Block_Height>;
};

export type QueryClaimedArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryClaimedsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Claimed_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Claimed_Filter>;
};

export type QueryGovernanceArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGovernancesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Governance_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Governance_Filter>;
};

export type QueryLockArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLocksArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Lock_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Lock_Filter>;
};

export type QueryMasterChefArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMasterChefsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MasterChef_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<MasterChef_Filter>;
};

export type QueryMigrationsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Migrations_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Migrations_Filter>;
};

export type QueryPoolArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPoolsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Pool_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Pool_Filter>;
};

export type QueryPurposalArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPurposalsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Purposal_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Purposal_Filter>;
};

export type QueryRewardArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRewardInfoArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRewardInfosArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardInfo_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<RewardInfo_Filter>;
};

export type QueryRewarderArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRewardersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Rewarder_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Rewarder_Filter>;
};

export type QueryRewardsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Reward_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Reward_Filter>;
};

export type QueryUserArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUsersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<User_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<User_Filter>;
};

export type QueryXembrArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryXembrsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<XEmbr_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<XEmbr_Filter>;
};

export type QueryXuserArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryXusersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<XUser_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<XUser_Filter>;
};

export type Reward = {
    __typename?: 'Reward';
    address: Scalars['Bytes'];
    block: Scalars['BigInt'];
    claimed: Scalars['BigInt'];
    id: Scalars['ID'];
    index: Scalars['BigInt'];
    owner?: Maybe<XUser>;
    timestamp: Scalars['BigInt'];
};

export type RewardInfo = {
    __typename?: 'RewardInfo';
    active: Scalars['Boolean'];
    address: Scalars['Bytes'];
    block: Scalars['BigInt'];
    claimed: Scalars['BigInt'];
    expiry: Scalars['BigInt'];
    id: Scalars['ID'];
    index: Scalars['BigInt'];
    timestamp: Scalars['BigInt'];
    unclaimed: Scalars['BigInt'];
    xembr?: Maybe<XEmbr>;
};

export type RewardInfo_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    active?: InputMaybe<Scalars['Boolean']>;
    active_in?: InputMaybe<Array<Scalars['Boolean']>>;
    active_not?: InputMaybe<Scalars['Boolean']>;
    active_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
    address?: InputMaybe<Scalars['Bytes']>;
    address_contains?: InputMaybe<Scalars['Bytes']>;
    address_in?: InputMaybe<Array<Scalars['Bytes']>>;
    address_not?: InputMaybe<Scalars['Bytes']>;
    address_not_contains?: InputMaybe<Scalars['Bytes']>;
    address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    claimed?: InputMaybe<Scalars['BigInt']>;
    claimed_gt?: InputMaybe<Scalars['BigInt']>;
    claimed_gte?: InputMaybe<Scalars['BigInt']>;
    claimed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    claimed_lt?: InputMaybe<Scalars['BigInt']>;
    claimed_lte?: InputMaybe<Scalars['BigInt']>;
    claimed_not?: InputMaybe<Scalars['BigInt']>;
    claimed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    expiry?: InputMaybe<Scalars['BigInt']>;
    expiry_gt?: InputMaybe<Scalars['BigInt']>;
    expiry_gte?: InputMaybe<Scalars['BigInt']>;
    expiry_in?: InputMaybe<Array<Scalars['BigInt']>>;
    expiry_lt?: InputMaybe<Scalars['BigInt']>;
    expiry_lte?: InputMaybe<Scalars['BigInt']>;
    expiry_not?: InputMaybe<Scalars['BigInt']>;
    expiry_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    unclaimed?: InputMaybe<Scalars['BigInt']>;
    unclaimed_gt?: InputMaybe<Scalars['BigInt']>;
    unclaimed_gte?: InputMaybe<Scalars['BigInt']>;
    unclaimed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    unclaimed_lt?: InputMaybe<Scalars['BigInt']>;
    unclaimed_lte?: InputMaybe<Scalars['BigInt']>;
    unclaimed_not?: InputMaybe<Scalars['BigInt']>;
    unclaimed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    xembr?: InputMaybe<Scalars['String']>;
    xembr_?: InputMaybe<XEmbr_Filter>;
    xembr_contains?: InputMaybe<Scalars['String']>;
    xembr_contains_nocase?: InputMaybe<Scalars['String']>;
    xembr_ends_with?: InputMaybe<Scalars['String']>;
    xembr_ends_with_nocase?: InputMaybe<Scalars['String']>;
    xembr_gt?: InputMaybe<Scalars['String']>;
    xembr_gte?: InputMaybe<Scalars['String']>;
    xembr_in?: InputMaybe<Array<Scalars['String']>>;
    xembr_lt?: InputMaybe<Scalars['String']>;
    xembr_lte?: InputMaybe<Scalars['String']>;
    xembr_not?: InputMaybe<Scalars['String']>;
    xembr_not_contains?: InputMaybe<Scalars['String']>;
    xembr_not_contains_nocase?: InputMaybe<Scalars['String']>;
    xembr_not_ends_with?: InputMaybe<Scalars['String']>;
    xembr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    xembr_not_in?: InputMaybe<Array<Scalars['String']>>;
    xembr_not_starts_with?: InputMaybe<Scalars['String']>;
    xembr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    xembr_starts_with?: InputMaybe<Scalars['String']>;
    xembr_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum RewardInfo_OrderBy {
    Active = 'active',
    Address = 'address',
    Block = 'block',
    Claimed = 'claimed',
    Expiry = 'expiry',
    Id = 'id',
    Index = 'index',
    Timestamp = 'timestamp',
    Unclaimed = 'unclaimed',
    Xembr = 'xembr',
}

export type Reward_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    address?: InputMaybe<Scalars['Bytes']>;
    address_contains?: InputMaybe<Scalars['Bytes']>;
    address_in?: InputMaybe<Array<Scalars['Bytes']>>;
    address_not?: InputMaybe<Scalars['Bytes']>;
    address_not_contains?: InputMaybe<Scalars['Bytes']>;
    address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    claimed?: InputMaybe<Scalars['BigInt']>;
    claimed_gt?: InputMaybe<Scalars['BigInt']>;
    claimed_gte?: InputMaybe<Scalars['BigInt']>;
    claimed_in?: InputMaybe<Array<Scalars['BigInt']>>;
    claimed_lt?: InputMaybe<Scalars['BigInt']>;
    claimed_lte?: InputMaybe<Scalars['BigInt']>;
    claimed_not?: InputMaybe<Scalars['BigInt']>;
    claimed_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    index?: InputMaybe<Scalars['BigInt']>;
    index_gt?: InputMaybe<Scalars['BigInt']>;
    index_gte?: InputMaybe<Scalars['BigInt']>;
    index_in?: InputMaybe<Array<Scalars['BigInt']>>;
    index_lt?: InputMaybe<Scalars['BigInt']>;
    index_lte?: InputMaybe<Scalars['BigInt']>;
    index_not?: InputMaybe<Scalars['BigInt']>;
    index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    owner?: InputMaybe<Scalars['String']>;
    owner_?: InputMaybe<XUser_Filter>;
    owner_contains?: InputMaybe<Scalars['String']>;
    owner_contains_nocase?: InputMaybe<Scalars['String']>;
    owner_ends_with?: InputMaybe<Scalars['String']>;
    owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
    owner_gt?: InputMaybe<Scalars['String']>;
    owner_gte?: InputMaybe<Scalars['String']>;
    owner_in?: InputMaybe<Array<Scalars['String']>>;
    owner_lt?: InputMaybe<Scalars['String']>;
    owner_lte?: InputMaybe<Scalars['String']>;
    owner_not?: InputMaybe<Scalars['String']>;
    owner_not_contains?: InputMaybe<Scalars['String']>;
    owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
    owner_not_ends_with?: InputMaybe<Scalars['String']>;
    owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    owner_not_in?: InputMaybe<Array<Scalars['String']>>;
    owner_not_starts_with?: InputMaybe<Scalars['String']>;
    owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    owner_starts_with?: InputMaybe<Scalars['String']>;
    owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Reward_OrderBy {
    Address = 'address',
    Block = 'block',
    Claimed = 'claimed',
    Id = 'id',
    Index = 'index',
    Owner = 'owner',
    Timestamp = 'timestamp',
}

export type Rewarder = {
    __typename?: 'Rewarder';
    block: Scalars['BigInt'];
    id: Scalars['ID'];
    rewardPerSecond: Scalars['BigInt'];
    rewardToken: Scalars['Bytes'];
    timestamp: Scalars['BigInt'];
};

export type Rewarder_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    rewardPerSecond?: InputMaybe<Scalars['BigInt']>;
    rewardPerSecond_gt?: InputMaybe<Scalars['BigInt']>;
    rewardPerSecond_gte?: InputMaybe<Scalars['BigInt']>;
    rewardPerSecond_in?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardPerSecond_lt?: InputMaybe<Scalars['BigInt']>;
    rewardPerSecond_lte?: InputMaybe<Scalars['BigInt']>;
    rewardPerSecond_not?: InputMaybe<Scalars['BigInt']>;
    rewardPerSecond_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardToken?: InputMaybe<Scalars['Bytes']>;
    rewardToken_contains?: InputMaybe<Scalars['Bytes']>;
    rewardToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
    rewardToken_not?: InputMaybe<Scalars['Bytes']>;
    rewardToken_not_contains?: InputMaybe<Scalars['Bytes']>;
    rewardToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Rewarder_OrderBy {
    Block = 'block',
    Id = 'id',
    RewardPerSecond = 'rewardPerSecond',
    RewardToken = 'rewardToken',
    Timestamp = 'timestamp',
}

export type Subscription = {
    __typename?: 'Subscription';
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>;
    claimed?: Maybe<Claimed>;
    claimeds: Array<Claimed>;
    governance?: Maybe<Governance>;
    governances: Array<Governance>;
    lock?: Maybe<Lock>;
    locks: Array<Lock>;
    masterChef?: Maybe<MasterChef>;
    masterChefs: Array<MasterChef>;
    migrations: Array<Migrations>;
    pool?: Maybe<Pool>;
    pools: Array<Pool>;
    purposal?: Maybe<Purposal>;
    purposals: Array<Purposal>;
    reward?: Maybe<Reward>;
    rewardInfo?: Maybe<RewardInfo>;
    rewardInfos: Array<RewardInfo>;
    rewarder?: Maybe<Rewarder>;
    rewarders: Array<Rewarder>;
    rewards: Array<Reward>;
    user?: Maybe<User>;
    users: Array<User>;
    xembr?: Maybe<XEmbr>;
    xembrs: Array<XEmbr>;
    xuser?: Maybe<XUser>;
    xusers: Array<XUser>;
};

export type Subscription_MetaArgs = {
    block?: InputMaybe<Block_Height>;
};

export type SubscriptionClaimedArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionClaimedsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Claimed_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Claimed_Filter>;
};

export type SubscriptionGovernanceArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGovernancesArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Governance_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Governance_Filter>;
};

export type SubscriptionLockArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLocksArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Lock_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Lock_Filter>;
};

export type SubscriptionMasterChefArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMasterChefsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MasterChef_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<MasterChef_Filter>;
};

export type SubscriptionMigrationsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Migrations_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Migrations_Filter>;
};

export type SubscriptionPoolArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPoolsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Pool_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Pool_Filter>;
};

export type SubscriptionPurposalArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPurposalsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Purposal_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Purposal_Filter>;
};

export type SubscriptionRewardArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRewardInfoArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRewardInfosArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardInfo_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<RewardInfo_Filter>;
};

export type SubscriptionRewarderArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRewardersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Rewarder_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Rewarder_Filter>;
};

export type SubscriptionRewardsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Reward_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<Reward_Filter>;
};

export type SubscriptionUserArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUsersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<User_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<User_Filter>;
};

export type SubscriptionXembrArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionXembrsArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<XEmbr_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<XEmbr_Filter>;
};

export type SubscriptionXuserArgs = {
    block?: InputMaybe<Block_Height>;
    id: Scalars['ID'];
    subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionXusersArgs = {
    block?: InputMaybe<Block_Height>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<XUser_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    subgraphError?: _SubgraphErrorPolicy_;
    where?: InputMaybe<XUser_Filter>;
};

export type User = {
    __typename?: 'User';
    address: Scalars['Bytes'];
    amount: Scalars['BigInt'];
    block: Scalars['BigInt'];
    embrHarvested: Scalars['BigInt'];
    id: Scalars['ID'];
    pool?: Maybe<Pool>;
    rewardDebt: Scalars['BigInt'];
    timestamp: Scalars['BigInt'];
};

export type User_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    address?: InputMaybe<Scalars['Bytes']>;
    address_contains?: InputMaybe<Scalars['Bytes']>;
    address_in?: InputMaybe<Array<Scalars['Bytes']>>;
    address_not?: InputMaybe<Scalars['Bytes']>;
    address_not_contains?: InputMaybe<Scalars['Bytes']>;
    address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    amount?: InputMaybe<Scalars['BigInt']>;
    amount_gt?: InputMaybe<Scalars['BigInt']>;
    amount_gte?: InputMaybe<Scalars['BigInt']>;
    amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    amount_lt?: InputMaybe<Scalars['BigInt']>;
    amount_lte?: InputMaybe<Scalars['BigInt']>;
    amount_not?: InputMaybe<Scalars['BigInt']>;
    amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    embrHarvested?: InputMaybe<Scalars['BigInt']>;
    embrHarvested_gt?: InputMaybe<Scalars['BigInt']>;
    embrHarvested_gte?: InputMaybe<Scalars['BigInt']>;
    embrHarvested_in?: InputMaybe<Array<Scalars['BigInt']>>;
    embrHarvested_lt?: InputMaybe<Scalars['BigInt']>;
    embrHarvested_lte?: InputMaybe<Scalars['BigInt']>;
    embrHarvested_not?: InputMaybe<Scalars['BigInt']>;
    embrHarvested_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    pool?: InputMaybe<Scalars['String']>;
    pool_?: InputMaybe<Pool_Filter>;
    pool_contains?: InputMaybe<Scalars['String']>;
    pool_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_ends_with?: InputMaybe<Scalars['String']>;
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_gt?: InputMaybe<Scalars['String']>;
    pool_gte?: InputMaybe<Scalars['String']>;
    pool_in?: InputMaybe<Array<Scalars['String']>>;
    pool_lt?: InputMaybe<Scalars['String']>;
    pool_lte?: InputMaybe<Scalars['String']>;
    pool_not?: InputMaybe<Scalars['String']>;
    pool_not_contains?: InputMaybe<Scalars['String']>;
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
    pool_not_ends_with?: InputMaybe<Scalars['String']>;
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    pool_not_in?: InputMaybe<Array<Scalars['String']>>;
    pool_not_starts_with?: InputMaybe<Scalars['String']>;
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    pool_starts_with?: InputMaybe<Scalars['String']>;
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
    rewardDebt?: InputMaybe<Scalars['BigInt']>;
    rewardDebt_gt?: InputMaybe<Scalars['BigInt']>;
    rewardDebt_gte?: InputMaybe<Scalars['BigInt']>;
    rewardDebt_in?: InputMaybe<Array<Scalars['BigInt']>>;
    rewardDebt_lt?: InputMaybe<Scalars['BigInt']>;
    rewardDebt_lte?: InputMaybe<Scalars['BigInt']>;
    rewardDebt_not?: InputMaybe<Scalars['BigInt']>;
    rewardDebt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum User_OrderBy {
    Address = 'address',
    Amount = 'amount',
    Block = 'block',
    EmbrHarvested = 'embrHarvested',
    Id = 'id',
    Pool = 'pool',
    RewardDebt = 'rewardDebt',
    Timestamp = 'timestamp',
}

export type XEmbr = {
    __typename?: 'XEmbr';
    activeTokenCount: Scalars['BigInt'];
    block: Scalars['BigInt'];
    id: Scalars['ID'];
    rewards: Array<RewardInfo>;
    staking: Scalars['BigInt'];
    timestamp: Scalars['BigInt'];
    tokenCount: Scalars['BigInt'];
    userCount: Scalars['BigInt'];
    users?: Maybe<Array<XUser>>;
};

export type XEmbrRewardsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<RewardInfo_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<RewardInfo_Filter>;
};

export type XEmbrUsersArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<XUser_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<XUser_Filter>;
};

export type XEmbr_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    activeTokenCount?: InputMaybe<Scalars['BigInt']>;
    activeTokenCount_gt?: InputMaybe<Scalars['BigInt']>;
    activeTokenCount_gte?: InputMaybe<Scalars['BigInt']>;
    activeTokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    activeTokenCount_lt?: InputMaybe<Scalars['BigInt']>;
    activeTokenCount_lte?: InputMaybe<Scalars['BigInt']>;
    activeTokenCount_not?: InputMaybe<Scalars['BigInt']>;
    activeTokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    rewards_?: InputMaybe<RewardInfo_Filter>;
    staking?: InputMaybe<Scalars['BigInt']>;
    staking_gt?: InputMaybe<Scalars['BigInt']>;
    staking_gte?: InputMaybe<Scalars['BigInt']>;
    staking_in?: InputMaybe<Array<Scalars['BigInt']>>;
    staking_lt?: InputMaybe<Scalars['BigInt']>;
    staking_lte?: InputMaybe<Scalars['BigInt']>;
    staking_not?: InputMaybe<Scalars['BigInt']>;
    staking_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tokenCount?: InputMaybe<Scalars['BigInt']>;
    tokenCount_gt?: InputMaybe<Scalars['BigInt']>;
    tokenCount_gte?: InputMaybe<Scalars['BigInt']>;
    tokenCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    tokenCount_lt?: InputMaybe<Scalars['BigInt']>;
    tokenCount_lte?: InputMaybe<Scalars['BigInt']>;
    tokenCount_not?: InputMaybe<Scalars['BigInt']>;
    tokenCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    userCount?: InputMaybe<Scalars['BigInt']>;
    userCount_gt?: InputMaybe<Scalars['BigInt']>;
    userCount_gte?: InputMaybe<Scalars['BigInt']>;
    userCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
    userCount_lt?: InputMaybe<Scalars['BigInt']>;
    userCount_lte?: InputMaybe<Scalars['BigInt']>;
    userCount_not?: InputMaybe<Scalars['BigInt']>;
    userCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    users_?: InputMaybe<XUser_Filter>;
};

export enum XEmbr_OrderBy {
    ActiveTokenCount = 'activeTokenCount',
    Block = 'block',
    Id = 'id',
    Rewards = 'rewards',
    Staking = 'staking',
    Timestamp = 'timestamp',
    TokenCount = 'tokenCount',
    UserCount = 'userCount',
    Users = 'users',
}

export type XUser = {
    __typename?: 'XUser';
    block: Scalars['BigInt'];
    claimed?: Maybe<Array<Claimed>>;
    expiry: Scalars['BigInt'];
    id: Scalars['ID'];
    locks?: Maybe<Array<Lock>>;
    owner: Scalars['Bytes'];
    purposals?: Maybe<Array<Purposal>>;
    rewards?: Maybe<Array<Reward>>;
    staking: Scalars['BigInt'];
    start: Scalars['BigInt'];
    timestamp: Scalars['BigInt'];
    xembr?: Maybe<XEmbr>;
};

export type XUserClaimedArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Claimed_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<Claimed_Filter>;
};

export type XUserLocksArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Lock_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<Lock_Filter>;
};

export type XUserPurposalsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Purposal_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<Purposal_Filter>;
};

export type XUserRewardsArgs = {
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Reward_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    skip?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<Reward_Filter>;
};

export type XUser_Filter = {
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>;
    block?: InputMaybe<Scalars['BigInt']>;
    block_gt?: InputMaybe<Scalars['BigInt']>;
    block_gte?: InputMaybe<Scalars['BigInt']>;
    block_in?: InputMaybe<Array<Scalars['BigInt']>>;
    block_lt?: InputMaybe<Scalars['BigInt']>;
    block_lte?: InputMaybe<Scalars['BigInt']>;
    block_not?: InputMaybe<Scalars['BigInt']>;
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    claimed_?: InputMaybe<Claimed_Filter>;
    expiry?: InputMaybe<Scalars['BigInt']>;
    expiry_gt?: InputMaybe<Scalars['BigInt']>;
    expiry_gte?: InputMaybe<Scalars['BigInt']>;
    expiry_in?: InputMaybe<Array<Scalars['BigInt']>>;
    expiry_lt?: InputMaybe<Scalars['BigInt']>;
    expiry_lte?: InputMaybe<Scalars['BigInt']>;
    expiry_not?: InputMaybe<Scalars['BigInt']>;
    expiry_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    id?: InputMaybe<Scalars['ID']>;
    id_gt?: InputMaybe<Scalars['ID']>;
    id_gte?: InputMaybe<Scalars['ID']>;
    id_in?: InputMaybe<Array<Scalars['ID']>>;
    id_lt?: InputMaybe<Scalars['ID']>;
    id_lte?: InputMaybe<Scalars['ID']>;
    id_not?: InputMaybe<Scalars['ID']>;
    id_not_in?: InputMaybe<Array<Scalars['ID']>>;
    locks_?: InputMaybe<Lock_Filter>;
    owner?: InputMaybe<Scalars['Bytes']>;
    owner_contains?: InputMaybe<Scalars['Bytes']>;
    owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
    owner_not?: InputMaybe<Scalars['Bytes']>;
    owner_not_contains?: InputMaybe<Scalars['Bytes']>;
    owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
    purposals_?: InputMaybe<Purposal_Filter>;
    rewards_?: InputMaybe<Reward_Filter>;
    staking?: InputMaybe<Scalars['BigInt']>;
    staking_gt?: InputMaybe<Scalars['BigInt']>;
    staking_gte?: InputMaybe<Scalars['BigInt']>;
    staking_in?: InputMaybe<Array<Scalars['BigInt']>>;
    staking_lt?: InputMaybe<Scalars['BigInt']>;
    staking_lte?: InputMaybe<Scalars['BigInt']>;
    staking_not?: InputMaybe<Scalars['BigInt']>;
    staking_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    start?: InputMaybe<Scalars['BigInt']>;
    start_gt?: InputMaybe<Scalars['BigInt']>;
    start_gte?: InputMaybe<Scalars['BigInt']>;
    start_in?: InputMaybe<Array<Scalars['BigInt']>>;
    start_lt?: InputMaybe<Scalars['BigInt']>;
    start_lte?: InputMaybe<Scalars['BigInt']>;
    start_not?: InputMaybe<Scalars['BigInt']>;
    start_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp?: InputMaybe<Scalars['BigInt']>;
    timestamp_gt?: InputMaybe<Scalars['BigInt']>;
    timestamp_gte?: InputMaybe<Scalars['BigInt']>;
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
    timestamp_lt?: InputMaybe<Scalars['BigInt']>;
    timestamp_lte?: InputMaybe<Scalars['BigInt']>;
    timestamp_not?: InputMaybe<Scalars['BigInt']>;
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
    xembr?: InputMaybe<Scalars['String']>;
    xembr_?: InputMaybe<XEmbr_Filter>;
    xembr_contains?: InputMaybe<Scalars['String']>;
    xembr_contains_nocase?: InputMaybe<Scalars['String']>;
    xembr_ends_with?: InputMaybe<Scalars['String']>;
    xembr_ends_with_nocase?: InputMaybe<Scalars['String']>;
    xembr_gt?: InputMaybe<Scalars['String']>;
    xembr_gte?: InputMaybe<Scalars['String']>;
    xembr_in?: InputMaybe<Array<Scalars['String']>>;
    xembr_lt?: InputMaybe<Scalars['String']>;
    xembr_lte?: InputMaybe<Scalars['String']>;
    xembr_not?: InputMaybe<Scalars['String']>;
    xembr_not_contains?: InputMaybe<Scalars['String']>;
    xembr_not_contains_nocase?: InputMaybe<Scalars['String']>;
    xembr_not_ends_with?: InputMaybe<Scalars['String']>;
    xembr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
    xembr_not_in?: InputMaybe<Array<Scalars['String']>>;
    xembr_not_starts_with?: InputMaybe<Scalars['String']>;
    xembr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
    xembr_starts_with?: InputMaybe<Scalars['String']>;
    xembr_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum XUser_OrderBy {
    Block = 'block',
    Claimed = 'claimed',
    Expiry = 'expiry',
    Id = 'id',
    Locks = 'locks',
    Owner = 'owner',
    Purposals = 'purposals',
    Rewards = 'rewards',
    Staking = 'staking',
    Start = 'start',
    Timestamp = 'timestamp',
    Xembr = 'xembr',
}

export type _Block_ = {
    __typename?: '_Block_';
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>;
    /** The block number */
    number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
    __typename?: '_Meta_';
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_;
    /** The deployment ID */
    deployment: Scalars['String'];
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
    /** Data will be returned even if the subgraph has indexing errors */
    Allow = 'allow',
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    Deny = 'deny',
}

export type MasterchefUsersQueryVariables = Exact<{
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<User_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<User_Filter>;
    block?: InputMaybe<Block_Height>;
}>;

export type MasterchefUsersQuery = {
    __typename?: 'Query';
    farmUsers: Array<{
        __typename?: 'User';
        id: string;
        address: string;
        amount: string;
        rewardDebt: string;
        embrHarvested: string;
        timestamp: string;
        pool?: { __typename?: 'Pool'; id: string; pair: string } | null;
    }>;
};

export type FarmUserFragment = {
    __typename?: 'User';
    id: string;
    address: string;
    amount: string;
    rewardDebt: string;
    embrHarvested: string;
    timestamp: string;
    pool?: { __typename?: 'Pool'; id: string; pair: string } | null;
};

export type MasterchefsQueryVariables = Exact<{
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<MasterChef_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<MasterChef_Filter>;
    block?: InputMaybe<Block_Height>;
}>;

export type MasterchefsQuery = {
    __typename?: 'Query';
    masterChefs: Array<{
        __typename?: 'MasterChef';
        id: string;
        embrPerSec: string;
        totalAllocPoint: string;
        poolCount: string;
        timestamp: string;
        block: string;
    }>;
};

export type MasterchefFarmsQueryVariables = Exact<{
    skip?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Pool_OrderBy>;
    orderDirection?: InputMaybe<OrderDirection>;
    where?: InputMaybe<Pool_Filter>;
    block?: InputMaybe<Block_Height>;
}>;

export type MasterchefFarmsQuery = {
    __typename?: 'Query';
    farms: Array<{
        __typename?: 'Pool';
        id: string;
        pair: string;
        allocPoint: string;
        lastRewardBlock: string;
        accEmbrPerShare: string;
        slpBalance: string;
        userCount: string;
        timestamp: string;
        block: string;
        masterChef: { __typename?: 'MasterChef'; id: string; totalAllocPoint: string; embrPerSec: string };
        rewarder?: { __typename?: 'Rewarder'; id: string; rewardToken: string; rewardPerSecond: string } | null;
    }>;
};

export type FarmFragment = {
    __typename?: 'Pool';
    id: string;
    pair: string;
    allocPoint: string;
    lastRewardBlock: string;
    accEmbrPerShare: string;
    slpBalance: string;
    userCount: string;
    timestamp: string;
    block: string;
    masterChef: { __typename?: 'MasterChef'; id: string; totalAllocPoint: string; embrPerSec: string };
    rewarder?: { __typename?: 'Rewarder'; id: string; rewardToken: string; rewardPerSecond: string } | null;
};

export type MasterchefPortfolioDataQueryVariables = Exact<{
    address: Scalars['Bytes'];
    previousBlockNumber: Scalars['Int'];
}>;

export type MasterchefPortfolioDataQuery = {
    __typename?: 'Query';
    farmUsers: Array<{
        __typename?: 'User';
        id: string;
        address: string;
        amount: string;
        rewardDebt: string;
        embrHarvested: string;
        timestamp: string;
        pool?: { __typename?: 'Pool'; id: string; pair: string } | null;
    }>;
    previousFarmUsers: Array<{
        __typename?: 'User';
        id: string;
        address: string;
        amount: string;
        rewardDebt: string;
        embrHarvested: string;
        timestamp: string;
        pool?: { __typename?: 'Pool'; id: string; pair: string } | null;
    }>;
};

export const FarmUserFragmentDoc = gql`
    fragment FarmUser on User {
        id
        address
        amount
        rewardDebt
        embrHarvested
        timestamp
        pool {
            id
            pair
        }
    }
`;
export const FarmFragmentDoc = gql`
    fragment Farm on Pool {
        id
        pair
        allocPoint
        lastRewardBlock
        accEmbrPerShare
        slpBalance
        userCount
        timestamp
        block
        masterChef {
            id
            totalAllocPoint
            embrPerSec
        }
        rewarder {
            id
            rewardToken
            rewardPerSecond
        }
    }
`;
export const MasterchefUsersDocument = gql`
    query MasterchefUsers(
        $skip: Int
        $first: Int
        $orderBy: User_orderBy
        $orderDirection: OrderDirection
        $where: User_filter
        $block: Block_height
    ) {
        farmUsers: users(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...FarmUser
        }
    }
    ${FarmUserFragmentDoc}
`;
export const MasterchefsDocument = gql`
    query Masterchefs(
        $skip: Int
        $first: Int
        $orderBy: MasterChef_orderBy
        $orderDirection: OrderDirection
        $where: MasterChef_filter
        $block: Block_height
    ) {
        masterChefs(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            id
            embrPerSec
            totalAllocPoint
            poolCount
            timestamp
            block
        }
    }
`;
export const MasterchefFarmsDocument = gql`
    query MasterchefFarms(
        $skip: Int
        $first: Int
        $orderBy: Pool_orderBy
        $orderDirection: OrderDirection
        $where: Pool_filter
        $block: Block_height
    ) {
        farms: pools(
            skip: $skip
            first: $first
            orderBy: $orderBy
            orderDirection: $orderDirection
            where: $where
            block: $block
        ) {
            ...Farm
        }
    }
    ${FarmFragmentDoc}
`;
export const MasterchefPortfolioDataDocument = gql`
    query MasterchefPortfolioData($address: Bytes!, $previousBlockNumber: Int!) {
        farmUsers: users(first: 1000, where: { address: $address }) {
            ...FarmUser
        }
        previousFarmUsers: users(first: 1000, where: { address: $address }, block: { number: $previousBlockNumber }) {
            ...FarmUser
        }
    }
    ${FarmUserFragmentDoc}
`;

export type SdkFunctionWrapper = <T>(
    action: (requestHeaders?: Record<string, string>) => Promise<T>,
    operationName: string,
    operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
    return {
        MasterchefUsers(
            variables?: MasterchefUsersQueryVariables,
            requestHeaders?: Dom.RequestInit['headers'],
        ): Promise<MasterchefUsersQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<MasterchefUsersQuery>(MasterchefUsersDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'MasterchefUsers',
                'query',
            );
        },
        Masterchefs(
            variables?: MasterchefsQueryVariables,
            requestHeaders?: Dom.RequestInit['headers'],
        ): Promise<MasterchefsQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<MasterchefsQuery>(MasterchefsDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'Masterchefs',
                'query',
            );
        },
        MasterchefFarms(
            variables?: MasterchefFarmsQueryVariables,
            requestHeaders?: Dom.RequestInit['headers'],
        ): Promise<MasterchefFarmsQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<MasterchefFarmsQuery>(MasterchefFarmsDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'MasterchefFarms',
                'query',
            );
        },
        MasterchefPortfolioData(
            variables: MasterchefPortfolioDataQueryVariables,
            requestHeaders?: Dom.RequestInit['headers'],
        ): Promise<MasterchefPortfolioDataQuery> {
            return withWrapper(
                (wrappedRequestHeaders) =>
                    client.request<MasterchefPortfolioDataQuery>(MasterchefPortfolioDataDocument, variables, {
                        ...requestHeaders,
                        ...wrappedRequestHeaders,
                    }),
                'MasterchefPortfolioData',
                'query',
            );
        },
    };
}
export type Sdk = ReturnType<typeof getSdk>;
