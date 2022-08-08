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
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface CurveCryptoRegistryInterface extends utils.Interface {
  functions: {
    'find_pool_for_coins(address,address)': FunctionFragment;
    'find_pool_for_coins(address,address,uint256)': FunctionFragment;
    'get_n_coins(address)': FunctionFragment;
    'get_coins(address)': FunctionFragment;
    'get_decimals(address)': FunctionFragment;
    'get_gauges(address)': FunctionFragment;
    'get_balances(address)': FunctionFragment;
    'get_virtual_price_from_lp_token(address)': FunctionFragment;
    'get_A(address)': FunctionFragment;
    'get_D(address)': FunctionFragment;
    'get_gamma(address)': FunctionFragment;
    'get_fees(address)': FunctionFragment;
    'get_admin_balances(address)': FunctionFragment;
    'get_coin_indices(address,address,address)': FunctionFragment;
    'get_pool_name(address)': FunctionFragment;
    'get_coin_swap_count(address)': FunctionFragment;
    'get_coin_swap_complement(address,uint256)': FunctionFragment;
    'add_pool(address,uint256,address,address,address,uint256,string)': FunctionFragment;
    'remove_pool(address)': FunctionFragment;
    'set_liquidity_gauges(address,address[10])': FunctionFragment;
    'batch_set_liquidity_gauges(address[10],address[10])': FunctionFragment;
    'address_provider()': FunctionFragment;
    'pool_list(uint256)': FunctionFragment;
    'pool_count()': FunctionFragment;
    'coin_count()': FunctionFragment;
    'get_coin(uint256)': FunctionFragment;
    'get_pool_from_lp_token(address)': FunctionFragment;
    'get_lp_token(address)': FunctionFragment;
    'get_zap(address)': FunctionFragment;
    'last_updated()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'find_pool_for_coins(address,address)'
      | 'find_pool_for_coins(address,address,uint256)'
      | 'get_n_coins'
      | 'get_coins'
      | 'get_decimals'
      | 'get_gauges'
      | 'get_balances'
      | 'get_virtual_price_from_lp_token'
      | 'get_A'
      | 'get_D'
      | 'get_gamma'
      | 'get_fees'
      | 'get_admin_balances'
      | 'get_coin_indices'
      | 'get_pool_name'
      | 'get_coin_swap_count'
      | 'get_coin_swap_complement'
      | 'add_pool'
      | 'remove_pool'
      | 'set_liquidity_gauges'
      | 'batch_set_liquidity_gauges'
      | 'address_provider'
      | 'pool_list'
      | 'pool_count'
      | 'coin_count'
      | 'get_coin'
      | 'get_pool_from_lp_token'
      | 'get_lp_token'
      | 'get_zap'
      | 'last_updated',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'find_pool_for_coins(address,address)',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'find_pool_for_coins(address,address,uint256)',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'get_n_coins', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_coins', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_decimals', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_gauges', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_balances', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_virtual_price_from_lp_token', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_A', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_D', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_gamma', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_fees', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_admin_balances', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'get_coin_indices',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'get_pool_name', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_coin_swap_count', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'get_coin_swap_complement',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'add_pool',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'remove_pool', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'set_liquidity_gauges',
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'batch_set_liquidity_gauges',
    values: [PromiseOrValue<string>[], PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(functionFragment: 'address_provider', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pool_list', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'pool_count', values?: undefined): string;
  encodeFunctionData(functionFragment: 'coin_count', values?: undefined): string;
  encodeFunctionData(functionFragment: 'get_coin', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'get_pool_from_lp_token', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_lp_token', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'get_zap', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'last_updated', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'find_pool_for_coins(address,address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'find_pool_for_coins(address,address,uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_n_coins', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_coins', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_decimals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_gauges', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_balances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_virtual_price_from_lp_token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_A', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_D', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_gamma', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_fees', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_admin_balances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_coin_indices', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_pool_name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_coin_swap_count', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_coin_swap_complement', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'add_pool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'remove_pool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'set_liquidity_gauges', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'batch_set_liquidity_gauges', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'address_provider', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pool_list', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pool_count', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'coin_count', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_coin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_pool_from_lp_token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_lp_token', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'get_zap', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'last_updated', data: BytesLike): Result;

  events: {
    'PoolAdded(address)': EventFragment;
    'PoolRemoved(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'PoolAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PoolRemoved'): EventFragment;
}

export interface PoolAddedEventObject {
  pool: string;
}
export type PoolAddedEvent = TypedEvent<[string], PoolAddedEventObject>;

export type PoolAddedEventFilter = TypedEventFilter<PoolAddedEvent>;

export interface PoolRemovedEventObject {
  pool: string;
}
export type PoolRemovedEvent = TypedEvent<[string], PoolRemovedEventObject>;

export type PoolRemovedEventFilter = TypedEventFilter<PoolRemovedEvent>;

export interface CurveCryptoRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CurveCryptoRegistryInterface;

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
    'find_pool_for_coins(address,address)'(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    'find_pool_for_coins(address,address,uint256)'(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    get_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    get_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;

    get_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;

    get_gauges(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;

    get_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;

    get_virtual_price_from_lp_token(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    get_A(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    get_D(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    get_gamma(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    get_fees(
      _pool: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[[BigNumber, BigNumber, BigNumber, BigNumber]]>;

    get_admin_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;

    get_coin_indices(
      _pool: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber]>;

    get_pool_name(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;

    get_coin_swap_count(_coin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    get_coin_swap_complement(
      _coin: PromiseOrValue<string>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    add_pool(
      _pool: PromiseOrValue<string>,
      _n_coins: PromiseOrValue<BigNumberish>,
      _lp_token: PromiseOrValue<string>,
      _gauge: PromiseOrValue<string>,
      _zap: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    remove_pool(
      _pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    set_liquidity_gauges(
      _pool: PromiseOrValue<string>,
      _liquidity_gauges: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    batch_set_liquidity_gauges(
      _pools: PromiseOrValue<string>[],
      _liquidity_gauges: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    address_provider(overrides?: CallOverrides): Promise<[string]>;

    pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    pool_count(overrides?: CallOverrides): Promise<[BigNumber]>;

    coin_count(overrides?: CallOverrides): Promise<[BigNumber]>;

    get_coin(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;

    get_pool_from_lp_token(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;

    get_lp_token(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;

    get_zap(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string]>;

    last_updated(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  'find_pool_for_coins(address,address)'(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<string>;

  'find_pool_for_coins(address,address,uint256)'(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    i: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<string>;

  get_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  get_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;

  get_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;

  get_gauges(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;

  get_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;

  get_virtual_price_from_lp_token(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  get_A(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  get_D(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  get_gamma(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  get_fees(
    _pool: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

  get_admin_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;

  get_coin_indices(
    _pool: PromiseOrValue<string>,
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber]>;

  get_pool_name(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  get_coin_swap_count(_coin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  get_coin_swap_complement(
    _coin: PromiseOrValue<string>,
    _index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<string>;

  add_pool(
    _pool: PromiseOrValue<string>,
    _n_coins: PromiseOrValue<BigNumberish>,
    _lp_token: PromiseOrValue<string>,
    _gauge: PromiseOrValue<string>,
    _zap: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    _name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  remove_pool(
    _pool: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  set_liquidity_gauges(
    _pool: PromiseOrValue<string>,
    _liquidity_gauges: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  batch_set_liquidity_gauges(
    _pools: PromiseOrValue<string>[],
    _liquidity_gauges: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  address_provider(overrides?: CallOverrides): Promise<string>;

  pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  pool_count(overrides?: CallOverrides): Promise<BigNumber>;

  coin_count(overrides?: CallOverrides): Promise<BigNumber>;

  get_coin(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  get_pool_from_lp_token(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  get_lp_token(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  get_zap(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

  last_updated(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    'find_pool_for_coins(address,address)'(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<string>;

    'find_pool_for_coins(address,address,uint256)'(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<string>;

    get_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;

    get_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;

    get_gauges(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;

    get_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;

    get_virtual_price_from_lp_token(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_A(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_D(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_gamma(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_fees(
      _pool: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber]>;

    get_admin_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;

    get_coin_indices(
      _pool: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber]>;

    get_pool_name(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    get_coin_swap_count(_coin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_coin_swap_complement(
      _coin: PromiseOrValue<string>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<string>;

    add_pool(
      _pool: PromiseOrValue<string>,
      _n_coins: PromiseOrValue<BigNumberish>,
      _lp_token: PromiseOrValue<string>,
      _gauge: PromiseOrValue<string>,
      _zap: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    remove_pool(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    set_liquidity_gauges(
      _pool: PromiseOrValue<string>,
      _liquidity_gauges: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    batch_set_liquidity_gauges(
      _pools: PromiseOrValue<string>[],
      _liquidity_gauges: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    address_provider(overrides?: CallOverrides): Promise<string>;

    pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    pool_count(overrides?: CallOverrides): Promise<BigNumber>;

    coin_count(overrides?: CallOverrides): Promise<BigNumber>;

    get_coin(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    get_pool_from_lp_token(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    get_lp_token(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    get_zap(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string>;

    last_updated(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'PoolAdded(address)'(pool?: PromiseOrValue<string> | null): PoolAddedEventFilter;
    PoolAdded(pool?: PromiseOrValue<string> | null): PoolAddedEventFilter;

    'PoolRemoved(address)'(pool?: PromiseOrValue<string> | null): PoolRemovedEventFilter;
    PoolRemoved(pool?: PromiseOrValue<string> | null): PoolRemovedEventFilter;
  };

  estimateGas: {
    'find_pool_for_coins(address,address)'(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'find_pool_for_coins(address,address,uint256)'(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    get_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_gauges(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_virtual_price_from_lp_token(_token: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_A(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_D(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_gamma(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_fees(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_admin_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_coin_indices(
      _pool: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    get_pool_name(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_coin_swap_count(_coin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_coin_swap_complement(
      _coin: PromiseOrValue<string>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    add_pool(
      _pool: PromiseOrValue<string>,
      _n_coins: PromiseOrValue<BigNumberish>,
      _lp_token: PromiseOrValue<string>,
      _gauge: PromiseOrValue<string>,
      _zap: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    remove_pool(
      _pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    set_liquidity_gauges(
      _pool: PromiseOrValue<string>,
      _liquidity_gauges: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    batch_set_liquidity_gauges(
      _pools: PromiseOrValue<string>[],
      _liquidity_gauges: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    address_provider(overrides?: CallOverrides): Promise<BigNumber>;

    pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    pool_count(overrides?: CallOverrides): Promise<BigNumber>;

    coin_count(overrides?: CallOverrides): Promise<BigNumber>;

    get_coin(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    get_pool_from_lp_token(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_lp_token(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    get_zap(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    last_updated(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    'find_pool_for_coins(address,address)'(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'find_pool_for_coins(address,address,uint256)'(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      i: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    get_n_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_coins(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_decimals(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_gauges(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_virtual_price_from_lp_token(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    get_A(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_D(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_gamma(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_fees(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_admin_balances(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_coin_indices(
      _pool: PromiseOrValue<string>,
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    get_pool_name(_pool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_coin_swap_count(_coin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_coin_swap_complement(
      _coin: PromiseOrValue<string>,
      _index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    add_pool(
      _pool: PromiseOrValue<string>,
      _n_coins: PromiseOrValue<BigNumberish>,
      _lp_token: PromiseOrValue<string>,
      _gauge: PromiseOrValue<string>,
      _zap: PromiseOrValue<string>,
      _decimals: PromiseOrValue<BigNumberish>,
      _name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    remove_pool(
      _pool: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    set_liquidity_gauges(
      _pool: PromiseOrValue<string>,
      _liquidity_gauges: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    batch_set_liquidity_gauges(
      _pools: PromiseOrValue<string>[],
      _liquidity_gauges: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    address_provider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool_list(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool_count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    coin_count(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_coin(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_pool_from_lp_token(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_lp_token(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get_zap(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    last_updated(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
