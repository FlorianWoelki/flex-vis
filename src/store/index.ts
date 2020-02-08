import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: false,
  },
  mutations: {
    change(state, darkMode: boolean) {
      state.darkMode = darkMode;
    },
  },
});
