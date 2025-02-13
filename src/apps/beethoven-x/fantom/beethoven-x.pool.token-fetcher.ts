import { Injectable } from '@nestjs/common';

import { Network } from '~types/network.interface';

import { BEETHOVEN_X_DEFINITION } from '../beethoven-x.definition';
import { BeethovenXPoolTokenFetcher } from '../common/beethoven-x.pool.token-fetcher';

@Injectable()
export class FantomBeethovenXPoolTokenFetcher extends BeethovenXPoolTokenFetcher {
  subgraphUrl = 'https://backend.beets-ftm-node.com/graphql';
  vaultAddress = '0x20dd72ed959b6147912c2e529f0a0c651c33c9ce';
  appId = BEETHOVEN_X_DEFINITION.id;
  groupId = BEETHOVEN_X_DEFINITION.groups.pool.id;
  groupLabel = 'Pools';
  network = Network.FANTOM_OPERA_MAINNET;
}
