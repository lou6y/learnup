import { NavItem } from 'src/app/view-apprenant/layouts/full/sidebar/nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard-apprenant',
    iconName: 'layout-dashboard',
    route: '/Dashboard-apprenant',
  },
  {
    navCap: 'Ui Components',
  },


  {
    displayName: 'List reponses',

    route: '/ui-components/listes-reponses',
  },
  {
    displayName: 'Mon apprentissage',

    route: '/ui-components/mes-courses',
  },

  {
    displayName: 'List souhaits',

    route: '/ui-components/Listes-Souhaits',
  },




];
