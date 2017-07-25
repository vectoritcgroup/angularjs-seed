import templateUrl from './home.component.html';
import vectorLogo from './assets/vector-logo.jpg';

import './home.component.scss';

export const HomeComponent = {
  templateUrl,
  controller: class HomeComponent {
    constructor() {
      this.header = 'AngularJS Vector Seed';
      this.centerImage = vectorLogo;
      this.centerImageDescription = 'Vector Logo';
    }
  },
};
