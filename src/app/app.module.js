import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { AppComponent } from './app.component';

export const app = angular
  .module('app', [
    uiRouter,
  ])
  .component('app', AppComponent)
  .name;
