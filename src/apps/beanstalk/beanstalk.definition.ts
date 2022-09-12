import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag, GroupType } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const BEANSTALK_DEFINITION = appDefinition({
  id: 'beanstalk',
  name: 'Beanstalk',
  description: 'Beanstalk is a permissionless fiat stablecoin protocol.',
  url: 'https://bean.money/',

  groups: {
    bean: {
      id: 'bean',
      type: GroupType.TOKEN,
      label: 'BEAN Token',
    },

    bean3Crv: {
      id: 'bean3crv',
      type: GroupType.TOKEN,
      label: 'BEAN3CRV Token',
    },

    ubean3Crv: {
      id: 'ubean3crv',
      type: GroupType.TOKEN,
      label: 'Unripe BEAN3CRV Token',
    },

    ubean: {
      id: 'ubean',
      type: GroupType.TOKEN,
      label: 'Unripe BEAN Token',
    },
  },

  tags: [AppTag.ALGORITHMIC_STABLECOIN, AppTag.STABLECOIN],
  keywords: [],
  links: {},

  supportedNetworks: {
    [Network.ETHEREUM_MAINNET]: [AppAction.VIEW],
  },

  primaryColor: '#fff',
});

@Register.AppDefinition(BEANSTALK_DEFINITION.id)
export class BeanstalkAppDefinition extends AppDefinition {
  constructor() {
    super(BEANSTALK_DEFINITION);
  }
}

export default BEANSTALK_DEFINITION;
