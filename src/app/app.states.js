const homeState = {
  name: 'home',
  url: '/',
  component: 'appHome',
  resolve: {
    header: /* @ngInject */ AppService => AppService.name,
  },
};

export const appStatesConfig = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state(homeState);

  $urlRouterProvider.otherwise('/');
};
