<template>
  <section id="main-view">
    <v-container class="u-text-center">
      <h1>Flexbox Visualizer</h1>
      <h5 class="font-thin">Carefully designed CSS flexbox visualizer for learning purposes.</h5>
      <v-space large></v-space>
      <v-btn class="u-center" color="link" size="large">
        <span class="font-bold">Get Started</span>
        <i class="fas fa-arrow-right fa-lg"></i>
      </v-btn>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MainView',
});
</script>

<style lang="scss">
#main-view {
  button i {
    margin-left: 10px;
  }
}
</style>
