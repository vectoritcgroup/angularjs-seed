import templateUrl from './app.component.html';
import './app.component.scss';

export const AppComponent = {
  templateUrl,
  controller: class AppComponent {
    constructor(AppService) {
      'ngInject';

      // this.appName = 'AngularJS Vector Seed';
      this.appName = AppService.name;
    }
  },
};
