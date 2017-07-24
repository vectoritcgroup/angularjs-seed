import templateUrl from './app.component.html';
import './app.component.scss';

export const AppComponent = {
  templateUrl,
  controller: class AppComponent {
    constructor() {
      this.url = 'https://github.com/vectoritcgroup/angularjs-seed';
    }
  },
};
