import templateUrl from './home.component.html';
import vectorLogo from './assets/vector-logo.jpg';

import './home.component.scss';

export const HomeComponent = {
  templateUrl,
  bindings: {
    header: '@',
  },
  controller: class HomeComponent {
    constructor() {
      this.centerImage = vectorLogo;
      this.centerImageDescription = 'Vector Logo';
    }
  },
};
