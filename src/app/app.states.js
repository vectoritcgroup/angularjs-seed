const homeState = {
  name: 'home',
  url: '/',
  component: 'appHome',
};

export const appStatesConfig = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state(homeState);

  $urlRouterProvider.otherwise('/');
};
