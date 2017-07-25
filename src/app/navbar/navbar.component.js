import templateUrl from './navbar.component.html';
import angularjsLogo from './assets/angularjs_logo.png';

export const NavbarComponent = {
  templateUrl,
  controller: class NavbarComponent {
    constructor() {
      this.brand = 'AngularJS Vector Seed';
      this.logo = angularjsLogo;
    }
  },
};
