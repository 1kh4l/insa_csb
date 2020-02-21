import InsaHome from '@/components/InsaHome';
import Basilians from '@/components/Basilians';

export default [
  {
    path: '/',
    component: InsaHome,
    name: 'root',
  },
  {
    path: '/home',
    component: InsaHome,
    name: 'home',
  },
  {
    path: '/basilians',
    component: Basilians,
    name: 'basilians',
  },
];
