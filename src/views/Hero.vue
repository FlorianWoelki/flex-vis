<template>
  <section id="hero-view">
    <v-space large></v-space>
    <v-parallax disableParallax fullscreen customBody>
      <v-container class="u-text-center">
        <img style="max-height: 250px;" src="@/assets/header-logo.png" alt="header-logo">
        <h1>Flexbox Visualizer</h1>
        <h5 class="font-thin">Carefully designed CSS flexbox visualizer for learning purposes.</h5>
        <v-space large></v-space>
        <v-btn class="u-center" color="link" size="large">
          <span class="font-bold">Get Started</span>
          <i class="fas fa-arrow-right fa-lg"></i>
        </v-btn>
        <v-space></v-space>
        <a class="github-button" href="https://github.com/florianwoelki/flex-vis" data-size="large" data-show-count="true" aria-label="Star florianwoelki/flex-vis on GitHub">Star</a>
      </v-container>
    </v-parallax>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Hero',
});
</script>

<style lang="scss">
#hero-view {
  button i {
    margin-left: 10px;
  }
}
</style>
