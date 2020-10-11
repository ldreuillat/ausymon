import Vue from 'vue';
import VCalendar from 'v-calendar';
import VueNoty from 'vuejs-noty';
import AusyUniversity from 'ausy-lib';
import logoDirective from './shared/logo-directive';
import salaryFilter from './shared/salary-filter';
import App from './App.vue';
import 'vuejs-noty/dist/vuejs-noty.css';

import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(AusyUniversity);
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});
Vue.use(VueNoty, {
  timeout: 2000,
  progressBar: true,
  layout: 'topCenter',
});
Vue.directive('logo', logoDirective);
Vue.filter('salary', salaryFilter);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
