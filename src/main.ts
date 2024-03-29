import Vue from 'vue';
import VueCirrus from 'vue-cirrus';
import router from './router';
import store from './store';
import App from './layouts/default.vue';

import 'vue-cirrus/dist/vue-cirrus.css';

Vue.config.productionTip = false;

Vue.use(VueCirrus);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
