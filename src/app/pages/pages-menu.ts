import { NbMenuItem } from '@nebular/theme';

// hint Элементы меню
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Test Page',
    icon: 'shopping-cart-outline',
    link: '/pages/test-page',
    home: true,
  },
  {
    title: 'Графики',
    icon: 'pie-chart-outline',
    link: '/pages/charts',
  },
  {
    title: 'Персонал',
    icon: 'person',
    link: '/pages/persons',
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
