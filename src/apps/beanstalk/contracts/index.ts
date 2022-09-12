import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ContractFactory } from '~contract/contracts';
import { Network } from '~types/network.interface';

import { BeanstalkBean__factory } from './ethers';
import { BeanstalkBean3Crv__factory } from './ethers';
import { BeanstalkUbean__factory } from './ethers';
import { BeanstalkUbean3Crv__factory } from './ethers';

// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class BeanstalkContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  beanstalkBean({ address, network }: ContractOpts) {
    return BeanstalkBean__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  beanstalkBean3Crv({ address, network }: ContractOpts) {
    return BeanstalkBean3Crv__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  beanstalkUbean({ address, network }: ContractOpts) {
    return BeanstalkUbean__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  beanstalkUbean3Crv({ address, network }: ContractOpts) {
    return BeanstalkUbean3Crv__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { BeanstalkBean } from './ethers';
export type { BeanstalkBean3Crv } from './ethers';
export type { BeanstalkUbean } from './ethers';
export type { BeanstalkUbean3Crv } from './ethers';
