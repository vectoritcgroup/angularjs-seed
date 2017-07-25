import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { AppService } from './app.service';

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
  .service('AppService', AppService)
  .component('app', AppComponent)
  .component('appNavbar', NavbarComponent)
  .component('appHome', HomeComponent)
  .name;
