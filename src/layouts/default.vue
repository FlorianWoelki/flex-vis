<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '../components/Navbar.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
@import '../scss/_variables.scss';

#app {
  background-color: $lightmode-color;

  h1 {
    color: $base-text-color;
  }

  &.dark {
    background-color: $darkmode-color;
    color: $lightmode-color;

    h1 {
      color: $lightmode-color;
    }
  }
}
</style>
