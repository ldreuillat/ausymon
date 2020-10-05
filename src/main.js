import Vue from 'vue';
import VCalendar from 'v-calendar';
import VueNoty from 'vuejs-noty';
import App from './App.vue';
import 'vuejs-noty/dist/vuejs-noty.css';

import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});
Vue.use(VueNoty, {
  timeout: 2000,
  progressBar: true,
  layout: 'topCenter',
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
