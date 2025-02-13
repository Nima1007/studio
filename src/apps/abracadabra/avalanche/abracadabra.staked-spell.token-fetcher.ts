import { Injectable } from '@nestjs/common';

import { Erc20 } from '~contract/contracts';
import { AppTokenTemplatePositionFetcher } from '~position/template/app-token.template.position-fetcher';
import { Network } from '~types';

import { ABRACADABRA_DEFINITION } from '../abracadabra.definition';

@Injectable()
export class AvalancheAbracadabraStakedSpellTokenFetcher extends AppTokenTemplatePositionFetcher<Erc20> {
  appId = ABRACADABRA_DEFINITION.id;
  groupId = ABRACADABRA_DEFINITION.groups.stakedSpell.id;
  network = Network.AVALANCHE_MAINNET;
  groupLabel = 'Staked SPELL';
  fromNetwork = Network.ETHEREUM_MAINNET;

  getContract(address: string) {
    return this.appToolkit.globalContracts.erc20({ address, network: this.network });
  }

  getAddresses() {
    return ['0x3ee97d514bbef95a2f110e6b9b73824719030f7a'];
  }

  async getUnderlyingTokenAddresses() {
    return ['0x26fa3fffb6efe8c1e69103acb4044c26b9a106a9'];
  }
}
