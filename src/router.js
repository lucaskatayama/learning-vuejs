import Vue from 'vue';
import Router from 'vue-router';
import Search from '@/components/Search';
import Results from '@/components/Results';
import Information from '@/components/Information';
import About from '@/components/About';
import Contact from '@/components/Contact';

Vue.use(Router);


export const routes = [
  {
    path: '/',
    name: 'search',
    component: Search,
  },
  {
    path: '/results',
    name: 'results',
    component: Results,
  },
  {
    path: '/info/:id',
    name: 'information',
    component: Information,
  },
  {
    name: 'about',
    path: '/about',
    component: About,
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact,
  },
];

export const router = new Router({ routes });
