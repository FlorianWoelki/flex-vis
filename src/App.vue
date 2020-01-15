<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <!-- TODO: Remove it and create a all in all view -->
    <Explanation />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from './components/Navbar.vue';
import Explanation from './views/Explanation.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Navbar,
    Explanation,
  },
});
</script>

<style lang="scss">
$base-text-color: #434850;

h1 {
  color: $base-text-color;
}

</style>
