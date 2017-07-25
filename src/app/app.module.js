import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

export const app = angular
  .module('app', [
    uiRouter,
  ])
  .component('app', AppComponent)
  .component('appNavbar', NavbarComponent)
  .name;
