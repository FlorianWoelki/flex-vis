<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
@import './scss/_variables.scss';

h1 {
  color: $base-text-color;
}
</style>
