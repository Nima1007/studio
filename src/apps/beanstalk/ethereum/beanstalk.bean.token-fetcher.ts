import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network } from '~types/network.interface';

import { BEANSTALK_DEFINITION } from '../beanstalk.definition';
import { BeanstalkContractFactory } from '../contracts';

const appId = BEANSTALK_DEFINITION.id;
const groupId = BEANSTALK_DEFINITION.groups.bean.id;
const network = Network.ETHEREUM_MAINNET;

@Register.TokenPositionFetcher({ appId, groupId, network })
export class EthereumBeanstalkBeanTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
    @Inject(BeanstalkContractFactory) private readonly beanstalkContractFactory: BeanstalkContractFactory,
    @Inject(UniswapV2PoolTokenHelper)
    private readonly uniswapV2PoolTokenHelper: UniswapV2PoolTokenHelper
  ) {}

  async getPositions() {
    return this.uniswapV2PoolTokenHelper.getTokens({
      // ...
    });
  }
}
