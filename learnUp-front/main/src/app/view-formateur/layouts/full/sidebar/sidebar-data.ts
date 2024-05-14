import { NavItem } from 'src/app/view-formateur/layouts/full/sidebar/nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard-former',
    iconName: 'layout-dashboard',
    route: '/dashboard-formateur',
  },
  {
    navCap: 'Ui Components',
  },

  {
    displayName: 'Add course',

    route: '/ui-components/ajout-cour',
  },
  {
    displayName: 'My courses',

    route: '/ui-components/mes-cours',
  },


  {
    displayName: 'Lists-questions',

    route: '/ui-components/lists-questions',
  },



  {
    displayName: 'My students',

    route: '/ui-components/mes-apprenants',
  },



];
