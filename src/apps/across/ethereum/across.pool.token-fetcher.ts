import { Injectable } from '@nestjs/common';

import { Network } from '~types/network.interface';

import ACROSS_DEFINITION from '../across.definition';
import { AcrossPoolTokenDefinition, AcrossPoolTokenFetcher } from '../common/across.pool.token-fetcher';

const v1Pools = [
  {
    address: '0x43298f9f91a4545df64748e78a2c777c580573d6',
    underlyingTokenAddress: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
  },
  {
    address: '0x4841572daa1f8e4ce0f62570877c2d0cc18c9535',
    underlyingTokenAddress: '0x42bbfa2e77757c645eeaad1655e0911a7553efbc',
  },
  {
    address: '0x43f133fe6fdfa17c417695c476447dc2a449ba5b',
    underlyingTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
  {
    address: '0xdfe0ec39291e3b60aca122908f86809c9ee64e90',
    underlyingTokenAddress: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
  },
  {
    address: '0x256c8919ce1ab0e33974cf6aa9c71561ef3017b6',
    underlyingTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  },
  {
    address: '0x02fbb64517e1c6ed69a6faa3abf37db0482f1152',
    underlyingTokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  },
  {
    address: '0x7355efc63ae731f584380a9838292c7046c1e433',
    underlyingTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
];
const v2Pools = [
  {
    address: '0x43298f9f91a4545df64748e78a2c777c580573d6',
    underlyingTokenAddress: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
  },
  {
    address: '0x4841572daa1f8e4ce0f62570877c2d0cc18c9535',
    underlyingTokenAddress: '0x42bbfa2e77757c645eeaad1655e0911a7553efbc',
  },
  {
    address: '0x43f133fe6fdfa17c417695c476447dc2a449ba5b',
    underlyingTokenAddress: '0x6b175474e89094c44da98b954eedeac495271d0f',
  },
  {
    address: '0xdfe0ec39291e3b60aca122908f86809c9ee64e90',
    underlyingTokenAddress: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
  },
  {
    address: '0x256c8919ce1ab0e33974cf6aa9c71561ef3017b6',
    underlyingTokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  },
  {
    address: '0x02fbb64517e1c6ed69a6faa3abf37db0482f1152',
    underlyingTokenAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  },
  {
    address: '0x7355efc63ae731f584380a9838292c7046c1e433',
    underlyingTokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  },
];

@Injectable()
export class EthereumAcrossPoolTokenFetcher extends AcrossPoolTokenFetcher {
  appId = ACROSS_DEFINITION.id;
  groupId = ACROSS_DEFINITION.groups.pool.id;
  network = Network.ETHEREUM_MAINNET;
  groupLabel = 'Pools';

  async getDefinitions(): Promise<AcrossPoolTokenDefinition[]> {
    return [...v1Pools, ...v2Pools];
  }
}
