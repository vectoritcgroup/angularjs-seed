import templateUrl from './navbar.component.html';
import angularjsLogo from './assets/angularjs_logo.png';

export const NavbarComponent = {
  templateUrl,
  bindings: {
    brand: '@',
  },
  controller: class NavbarComponent {
    constructor() {
      this.logo = angularjsLogo;
    }
  },
};
