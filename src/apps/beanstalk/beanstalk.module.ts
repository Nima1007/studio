import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';

import { BeanstalkAppDefinition, BEANSTALK_DEFINITION } from './beanstalk.definition';
import { BeanstalkContractFactory } from './contracts';
import { EthereumBeanstalkBeanTokenFetcher } from './ethereum/beanstalk.bean.token-fetcher';
import { UniswapV2AppModule } from '~apps/uniswap-v2';

@Register.AppModule({
  appId: BEANSTALK_DEFINITION.id,
  imports: [UniswapV2AppModule],
  providers: [BeanstalkAppDefinition, BeanstalkContractFactory, EthereumBeanstalkBeanTokenFetcher],
})
export class BeanstalkAppModule extends AbstractApp() { }
