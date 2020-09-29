import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import GeekSelector from '../selection/GeekSelector.vue';
import TechnoDetails from '../details/TechnoDetails.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/selection',
    name: 'GeekSelector',
    component: GeekSelector,
  },
  {
    path: '/technos/:candidateId',
    name: 'TechnoDetails',
    component: TechnoDetails,
    props: true,
  }],
});
