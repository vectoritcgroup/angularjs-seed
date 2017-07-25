import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { appConfig } from './app.config';
import { appStatesConfig } from './app.states';

export const app = angular
  .module('app', [
    uiRouter,
  ])
  .config(appConfig)
  .config(appStatesConfig)
  .component('app', AppComponent)
  .component('appNavbar', NavbarComponent)
  .component('appHome', HomeComponent)
  .name;
