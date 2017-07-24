import template from './app.component.html';
import './app.component.scss';

export const AppComponent = {
  template,
  controller: class AppComponent {
    constructor() {
      this.url = 'https://github.com/vectoritcgroup/angularjs-seed';
    }
  },
};
