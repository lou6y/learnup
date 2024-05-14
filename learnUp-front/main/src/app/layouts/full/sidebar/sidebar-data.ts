import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Ui Components',
  },
  {
    displayName: 'List-Users',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'List-Formers',
    iconName: 'list',
    route: '/ui-components/chips',
  },
  {
    displayName: 'List-Courses',
    iconName: 'list',
    route: '/ui-components/cours',
  },
  {
    displayName: 'Pending-course',
    iconName: 'list',
    route: '/ui-components/pending-cour',
  },
  {
    displayName: 'Add User',

    iconName: 'list',
    route: '/ui-components/nouveau-user',
  },
  {
    displayName: 'Payments',
    iconName: 'list',
    route: '/ui-components/PaymentCour',
  },


];
