import FuseUtils from '@fuse/utils';
import MobileWebPageConfig from 'app/main/mobile/MobileWebPageConfig';
import { Redirect } from 'react-router-dom';
import FuseLoading from '@fuse/core/FuseLoading';

const routeConfigs = [
  MobileWebPageConfig
];

const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/index" />,
  },
  {
    path: '/loading',
    exact: true,
    component: () => <FuseLoading />,
  }
];

export default routes;
