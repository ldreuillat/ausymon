import Vue from 'vue';
import VCalendar from 'v-calendar';
import App from './App.vue';

import router from './router';

Vue.config.productionTip = false;
Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
