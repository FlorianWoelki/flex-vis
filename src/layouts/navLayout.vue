<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '../components/Navbar.vue';

export default Vue.extend({
  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
@import '../scss/_variables.scss';

#app {
  background-color: $lightmode-color;

  .flex-option-showcase {
    min-height: 100vh;

    .divider {
      margin-top: 0;
    }

    .definition {
      font-size: 18px;
    }
  }

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
