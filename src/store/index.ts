import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: false,
  },
  mutations: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;

      if (state.darkMode) {
        document.getElementById('app')!!.classList.add('dark');
      } else {
        document.getElementById('app')!!.classList.remove('dark');
      }
    },
  },
});
