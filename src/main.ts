import Vue from 'vue';
import Vuex from 'vuex';
import VueCirrus from 'vue-cirrus';
import router from './router';
import App from './App.vue';

import 'vue-cirrus/dist/vue-cirrus.css';

Vue.config.productionTip = false;

Vue.use(VueCirrus);
Vue.use(Vuex);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
