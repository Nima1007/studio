/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace CoslendLens {
  export type MarketMetadataStruct = {
    marketAddress: PromiseOrValue<string>;
    marketDecimals: PromiseOrValue<BigNumberish>;
    marketSymbol: PromiseOrValue<string>;
    marketName: PromiseOrValue<string>;
    underlyingAddress: PromiseOrValue<string>;
    underlyingDecimals: PromiseOrValue<BigNumberish>;
    underlyingSymbol: PromiseOrValue<string>;
    underlyingName: PromiseOrValue<string>;
    exchangeRateCurrent: PromiseOrValue<BigNumberish>;
    supplyRatePerSecond: PromiseOrValue<BigNumberish>;
    borrowRatePerSecond: PromiseOrValue<BigNumberish>;
    reserveFactorMantissa: PromiseOrValue<BigNumberish>;
    collateralFactorMantissa: PromiseOrValue<BigNumberish>;
    totalBorrows: PromiseOrValue<BigNumberish>;
    totalReserves: PromiseOrValue<BigNumberish>;
    totalSupply: PromiseOrValue<BigNumberish>;
    totalCash: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    isListed: PromiseOrValue<boolean>;
    blockTime: PromiseOrValue<BigNumberish>;
    accrualBlockTime: PromiseOrValue<BigNumberish>;
    borrowIndex: PromiseOrValue<BigNumberish>;
  };

  export type MarketMetadataStructOutput = [
    string,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
  ] & {
    marketAddress: string;
    marketDecimals: BigNumber;
    marketSymbol: string;
    marketName: string;
    underlyingAddress: string;
    underlyingDecimals: BigNumber;
    underlyingSymbol: string;
    underlyingName: string;
    exchangeRateCurrent: BigNumber;
    supplyRatePerSecond: BigNumber;
    borrowRatePerSecond: BigNumber;
    reserveFactorMantissa: BigNumber;
    collateralFactorMantissa: BigNumber;
    totalBorrows: BigNumber;
    totalReserves: BigNumber;
    totalSupply: BigNumber;
    totalCash: BigNumber;
    price: BigNumber;
    isListed: boolean;
    blockTime: BigNumber;
    accrualBlockTime: BigNumber;
    borrowIndex: BigNumber;
  };

  export type InterestRateModelStruct = {
    market: PromiseOrValue<string>;
    secondsPerYear: PromiseOrValue<BigNumberish>;
    multiplierPerSecond: PromiseOrValue<BigNumberish>;
    baseRatePerSecond: PromiseOrValue<BigNumberish>;
    jumpMultiplierPerSecond: PromiseOrValue<BigNumberish>;
    kink: PromiseOrValue<BigNumberish>;
  };

  export type InterestRateModelStructOutput = [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    market: string;
    secondsPerYear: BigNumber;
    multiplierPerSecond: BigNumber;
    baseRatePerSecond: BigNumber;
    jumpMultiplierPerSecond: BigNumber;
    kink: BigNumber;
  };

  export type MarketRewardSpeedStruct = {
    market: PromiseOrValue<string>;
    supplySpeed: PromiseOrValue<BigNumberish>;
    borrowSpeed: PromiseOrValue<BigNumberish>;
  };

  export type MarketRewardSpeedStructOutput = [string, BigNumber, BigNumber] & {
    market: string;
    supplySpeed: BigNumber;
    borrowSpeed: BigNumber;
  };

  export type AccountLimitsStruct = {
    markets: PromiseOrValue<string>[];
    liquidity: PromiseOrValue<BigNumberish>;
    shortfall: PromiseOrValue<BigNumberish>;
  };

  export type AccountLimitsStructOutput = [string[], BigNumber, BigNumber] & {
    markets: string[];
    liquidity: BigNumber;
    shortfall: BigNumber;
  };

  export type MarketTokenBalancesStruct = {
    marketToken: PromiseOrValue<string>;
    balanceOf: PromiseOrValue<BigNumberish>;
    balanceOfUnderlying: PromiseOrValue<BigNumberish>;
    borrowBalanceCurrent: PromiseOrValue<BigNumberish>;
    tokenBalance: PromiseOrValue<BigNumberish>;
    tokenAllowance: PromiseOrValue<BigNumberish>;
  };

  export type MarketTokenBalancesStructOutput = [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    marketToken: string;
    balanceOf: BigNumber;
    balanceOfUnderlying: BigNumber;
    borrowBalanceCurrent: BigNumber;
    tokenBalance: BigNumber;
    tokenAllowance: BigNumber;
  };
}

export interface CoslendLensInterface extends utils.Interface {
  functions: {
    'all()': FunctionFragment;
    'allForAccountInMarkets(address)': FunctionFragment;
    'allMarketsForAccount(address)': FunctionFragment;
    'marketBalances(address,address)': FunctionFragment;
    'marketBalancesAll(address[],address)': FunctionFragment;
    'pendingRewardAccruedI(address)': FunctionFragment;
    'pendingRewardAccruedII(address)': FunctionFragment;
    'updateProperties(address,address,address,string,string,string)': FunctionFragment;
    'comptroller()': FunctionFragment;
    'distributionI()': FunctionFragment;
    'distributionII()': FunctionFragment;
    'getAccountLimits(address)': FunctionFragment;
    'getAllMarkets()': FunctionFragment;
    'getInterestRateModel(address)': FunctionFragment;
    'getInterestRateModels(address[])': FunctionFragment;
    'getRewardSpeed(address)': FunctionFragment;
    'getRewardSpeeds(address[])': FunctionFragment;
    'marketTokenMetadata(address)': FunctionFragment;
    'marketTokenMetadataAll(address[])': FunctionFragment;
    'nativeMarketToken()': FunctionFragment;
    'nativeName()': FunctionFragment;
    'nativeToken()': FunctionFragment;
    'owner()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'all'
      | 'allForAccountInMarkets'
      | 'allMarketsForAccount'
      | 'marketBalances'
      | 'marketBalancesAll'
      | 'pendingRewardAccruedI'
      | 'pendingRewardAccruedII'
      | 'updateProperties'
      | 'comptroller'
      | 'distributionI'
      | 'distributionII'
      | 'getAccountLimits'
      | 'getAllMarkets'
      | 'getInterestRateModel'
      | 'getInterestRateModels'
      | 'getRewardSpeed'
      | 'getRewardSpeeds'
      | 'marketTokenMetadata'
      | 'marketTokenMetadataAll'
      | 'nativeMarketToken'
      | 'nativeName'
      | 'nativeToken'
      | 'owner',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'all', values?: undefined): string;
  encodeFunctionData(functionFragment: 'allForAccountInMarkets', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'allMarketsForAccount', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'marketBalances',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'marketBalancesAll',
    values: [PromiseOrValue<string>[], PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'pendingRewardAccruedI', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'pendingRewardAccruedII', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'updateProperties',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'comptroller', values?: undefined): string;
  encodeFunctionData(functionFragment: 'distributionI', values?: undefined): string;
  encodeFunctionData(functionFragment: 'distributionII', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getAccountLimits', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getAllMarkets', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getInterestRateModel', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getInterestRateModels', values: [PromiseOrValue<string>[]]): string;
  encodeFunctionData(functionFragment: 'getRewardSpeed', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getRewardSpeeds', values: [PromiseOrValue<string>[]]): string;
  encodeFunctionData(functionFragment: 'marketTokenMetadata', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'marketTokenMetadataAll', values: [PromiseOrValue<string>[]]): string;
  encodeFunctionData(functionFragment: 'nativeMarketToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nativeName', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nativeToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'all', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allForAccountInMarkets', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'allMarketsForAccount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'marketBalances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'marketBalancesAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingRewardAccruedI', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingRewardAccruedII', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateProperties', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'comptroller', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'distributionI', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'distributionII', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAccountLimits', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getAllMarkets', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getInterestRateModel', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getInterestRateModels', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRewardSpeed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getRewardSpeeds', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'marketTokenMetadata', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'marketTokenMetadataAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nativeMarketToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nativeName', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nativeToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;

  events: {};
}

export interface CoslendLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CoslendLensInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    all(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    allForAccountInMarkets(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    allMarketsForAccount(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    marketBalances(
      marketToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    marketBalancesAll(
      marketTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    pendingRewardAccruedI(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    pendingRewardAccruedII(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updateProperties(
      _comptroller: PromiseOrValue<string>,
      _distributionI: PromiseOrValue<string>,
      _distributionII: PromiseOrValue<string>,
      _nativeMarketToken: PromiseOrValue<string>,
      _nativeToken: PromiseOrValue<string>,
      _nativeName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    comptroller(overrides?: CallOverrides): Promise<[string]>;

    distributionI(overrides?: CallOverrides): Promise<[string]>;

    distributionII(overrides?: CallOverrides): Promise<[string]>;

    getAccountLimits(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[CoslendLens.AccountLimitsStructOutput]>;

    getAllMarkets(overrides?: CallOverrides): Promise<[string[]]>;

    getInterestRateModel(
      market: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[CoslendLens.InterestRateModelStructOutput]>;

    getInterestRateModels(
      markets: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[CoslendLens.InterestRateModelStructOutput[]]>;

    getRewardSpeed(
      market: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[CoslendLens.MarketRewardSpeedStructOutput]>;

    getRewardSpeeds(
      mrakets: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[CoslendLens.MarketRewardSpeedStructOutput[]]>;

    marketTokenMetadata(
      marketToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[CoslendLens.MarketMetadataStructOutput]>;

    marketTokenMetadataAll(
      marketTokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<[CoslendLens.MarketMetadataStructOutput[]]>;

    nativeMarketToken(overrides?: CallOverrides): Promise<[string]>;

    nativeName(overrides?: CallOverrides): Promise<[string]>;

    nativeToken(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;
  };

  all(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  allForAccountInMarkets(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  allMarketsForAccount(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  marketBalances(
    marketToken: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  marketBalancesAll(
    marketTokens: PromiseOrValue<string>[],
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  pendingRewardAccruedI(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  pendingRewardAccruedII(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updateProperties(
    _comptroller: PromiseOrValue<string>,
    _distributionI: PromiseOrValue<string>,
    _distributionII: PromiseOrValue<string>,
    _nativeMarketToken: PromiseOrValue<string>,
    _nativeToken: PromiseOrValue<string>,
    _nativeName: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  comptroller(overrides?: CallOverrides): Promise<string>;

  distributionI(overrides?: CallOverrides): Promise<string>;

  distributionII(overrides?: CallOverrides): Promise<string>;

  getAccountLimits(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<CoslendLens.AccountLimitsStructOutput>;

  getAllMarkets(overrides?: CallOverrides): Promise<string[]>;

  getInterestRateModel(
    market: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<CoslendLens.InterestRateModelStructOutput>;

  getInterestRateModels(
    markets: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<CoslendLens.InterestRateModelStructOutput[]>;

  getRewardSpeed(
    market: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<CoslendLens.MarketRewardSpeedStructOutput>;

  getRewardSpeeds(
    mrakets: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<CoslendLens.MarketRewardSpeedStructOutput[]>;

  marketTokenMetadata(
    marketToken: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<CoslendLens.MarketMetadataStructOutput>;

  marketTokenMetadataAll(
    marketTokens: PromiseOrValue<string>[],
    overrides?: CallOverrides,
  ): Promise<CoslendLens.MarketMetadataStructOutput[]>;

  nativeMarketToken(overrides?: CallOverrides): Promise<string>;

  nativeName(overrides?: CallOverrides): Promise<string>;

  nativeToken(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    all(
      overrides?: CallOverrides,
    ): Promise<
      [
        CoslendLens.MarketMetadataStructOutput[],
        CoslendLens.InterestRateModelStructOutput[],
        CoslendLens.MarketRewardSpeedStructOutput[],
      ]
    >;

    allForAccountInMarkets(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [
        CoslendLens.MarketMetadataStructOutput[],
        CoslendLens.AccountLimitsStructOutput,
        CoslendLens.MarketTokenBalancesStructOutput[],
      ]
    >;

    allMarketsForAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [
        CoslendLens.AccountLimitsStructOutput,
        CoslendLens.MarketTokenBalancesStructOutput[],
        CoslendLens.MarketMetadataStructOutput[],
      ]
    >;

    marketBalances(
      marketToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<CoslendLens.MarketTokenBalancesStructOutput>;

    marketBalancesAll(
      marketTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<CoslendLens.MarketTokenBalancesStructOutput[]>;

    pendingRewardAccruedI(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    pendingRewardAccruedII(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    updateProperties(
      _comptroller: PromiseOrValue<string>,
      _distributionI: PromiseOrValue<string>,
      _distributionII: PromiseOrValue<string>,
      _nativeMarketToken: PromiseOrValue<string>,
      _nativeToken: PromiseOrValue<string>,
      _nativeName: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    comptroller(overrides?: CallOverrides): Promise<string>;

    distributionI(overrides?: CallOverrides): Promise<string>;

    distributionII(overrides?: CallOverrides): Promise<string>;

    getAccountLimits(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<CoslendLens.AccountLimitsStructOutput>;

    getAllMarkets(overrides?: CallOverrides): Promise<string[]>;

    getInterestRateModel(
      market: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<CoslendLens.InterestRateModelStructOutput>;

    getInterestRateModels(
      markets: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<CoslendLens.InterestRateModelStructOutput[]>;

    getRewardSpeed(
      market: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<CoslendLens.MarketRewardSpeedStructOutput>;

    getRewardSpeeds(
      mrakets: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<CoslendLens.MarketRewardSpeedStructOutput[]>;

    marketTokenMetadata(
      marketToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<CoslendLens.MarketMetadataStructOutput>;

    marketTokenMetadataAll(
      marketTokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<CoslendLens.MarketMetadataStructOutput[]>;

    nativeMarketToken(overrides?: CallOverrides): Promise<string>;

    nativeName(overrides?: CallOverrides): Promise<string>;

    nativeToken(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    all(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    allForAccountInMarkets(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    allMarketsForAccount(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    marketBalances(
      marketToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    marketBalancesAll(
      marketTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    pendingRewardAccruedI(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    pendingRewardAccruedII(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updateProperties(
      _comptroller: PromiseOrValue<string>,
      _distributionI: PromiseOrValue<string>,
      _distributionII: PromiseOrValue<string>,
      _nativeMarketToken: PromiseOrValue<string>,
      _nativeToken: PromiseOrValue<string>,
      _nativeName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    comptroller(overrides?: CallOverrides): Promise<BigNumber>;

    distributionI(overrides?: CallOverrides): Promise<BigNumber>;

    distributionII(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountLimits(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getAllMarkets(overrides?: CallOverrides): Promise<BigNumber>;

    getInterestRateModel(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getInterestRateModels(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;

    getRewardSpeed(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getRewardSpeeds(mrakets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;

    marketTokenMetadata(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    marketTokenMetadataAll(marketTokens: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;

    nativeMarketToken(overrides?: CallOverrides): Promise<BigNumber>;

    nativeName(overrides?: CallOverrides): Promise<BigNumber>;

    nativeToken(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    all(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    allForAccountInMarkets(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    allMarketsForAccount(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    marketBalances(
      marketToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    marketBalancesAll(
      marketTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    pendingRewardAccruedI(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    pendingRewardAccruedII(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updateProperties(
      _comptroller: PromiseOrValue<string>,
      _distributionI: PromiseOrValue<string>,
      _distributionII: PromiseOrValue<string>,
      _nativeMarketToken: PromiseOrValue<string>,
      _nativeToken: PromiseOrValue<string>,
      _nativeName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    comptroller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distributionI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    distributionII(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccountLimits(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getInterestRateModel(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getInterestRateModels(markets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRewardSpeed(market: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRewardSpeeds(mrakets: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marketTokenMetadata(marketToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marketTokenMetadataAll(
      marketTokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    nativeMarketToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nativeName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nativeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
