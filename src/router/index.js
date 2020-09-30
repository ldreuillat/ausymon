import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import GeekSelector from '../selection/GeekSelector.vue';
import TechnoDetails from '../details/TechnoDetails.vue';
import ShowUsages from '../usage/ShowUsages.vue';
import UsagePolicy from '../usage/UsagePolicy.vue';
import UsageGlossary from '../usage/UsageGlossary.vue';
import UsageCopyright from '../usage/UsageCopyright.vue';
import HomeFooter from '../footer/HomeFooter.vue';
import SelectorFooter from '../footer/SelectorFooter.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      footer: HomeFooter,
    },
  },
  {
    path: '/selection',
    name: 'GeekSelector',
    components: {
      default: GeekSelector,
      footer: SelectorFooter,
    },
  },
  {
    path: '/technos/:candidateId',
    name: 'TechnoDetails',
    component: TechnoDetails,
    props: true,
  },
  {
    path: '/usages',
    name: 'ShowUsages',
    component: ShowUsages,
    children: [
      {
        name: 'Use',
        path: 'use',
        component: UsagePolicy,
      },
      {
        name: 'Glossary',
        path: 'glossary',
        component: UsageGlossary,
      },
      {
        name: 'Copyright',
        path: 'copyright',
        component: UsageCopyright,
      },
    ],
  }],
});
