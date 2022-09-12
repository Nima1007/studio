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

export interface PendleStakingInterface extends utils.Interface {
  functions: {
    'balances(address)': FunctionFragment;
    'enter(uint256)': FunctionFragment;
    'leave(uint256)': FunctionFragment;
    'pendle()': FunctionFragment;
    'stakingManager()': FunctionFragment;
    'totalSupply()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: 'balances' | 'enter' | 'leave' | 'pendle' | 'stakingManager' | 'totalSupply',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'balances', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'enter', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'leave', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'pendle', values?: undefined): string;
  encodeFunctionData(functionFragment: 'stakingManager', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'balances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'enter', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'leave', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendle', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'stakingManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;

  events: {
    'Enter(address,uint256,uint256)': EventFragment;
    'Leave(address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Enter'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Leave'): EventFragment;
}

export interface EnterEventObject {
  user: string;
  pendleAmount: BigNumber;
  shares: BigNumber;
}
export type EnterEvent = TypedEvent<[string, BigNumber, BigNumber], EnterEventObject>;

export type EnterEventFilter = TypedEventFilter<EnterEvent>;

export interface LeaveEventObject {
  user: string;
  pendleAmount: BigNumber;
  shares: BigNumber;
}
export type LeaveEvent = TypedEvent<[string, BigNumber, BigNumber], LeaveEventObject>;

export type LeaveEventFilter = TypedEventFilter<LeaveEvent>;

export interface PendleStaking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PendleStakingInterface;

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
    balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    enter(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    leave(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    pendle(overrides?: CallOverrides): Promise<[string]>;

    stakingManager(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  enter(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  leave(
    _share: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  pendle(overrides?: CallOverrides): Promise<string>;

  stakingManager(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    enter(_amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    leave(_share: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    pendle(overrides?: CallOverrides): Promise<string>;

    stakingManager(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'Enter(address,uint256,uint256)'(user?: null, pendleAmount?: null, shares?: null): EnterEventFilter;
    Enter(user?: null, pendleAmount?: null, shares?: null): EnterEventFilter;

    'Leave(address,uint256,uint256)'(user?: null, pendleAmount?: null, shares?: null): LeaveEventFilter;
    Leave(user?: null, pendleAmount?: null, shares?: null): LeaveEventFilter;
  };

  estimateGas: {
    balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    enter(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    leave(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    pendle(overrides?: CallOverrides): Promise<BigNumber>;

    stakingManager(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    balances(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enter(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    leave(
      _share: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    pendle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakingManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
