<template>
  <section id="hero-view">
    <v-parallax disableParallax fullscreen>
      <v-container class="u-text-center">
        <img style="max-height: 200px;" src="@/assets/header-logo.png" alt="header-logo">
        <h1>Flexbox Visualizer</h1>
        <h5 class="font-thin">Carefully designed CSS flexbox visualizer for learning purposes.</h5>
        <v-space large></v-space>
        <v-btn class="u-center" color="link" size="large" @click="handleGetStarted">
          <span class="font-bold">Get Started</span>
          <i class="fas fa-arrow-right fa-lg"></i>
        </v-btn>
        <v-space></v-space>
        <iframe src="https://ghbtns.com/github-btn.html?user=florianwoelki&repo=flex-vis&type=star&count=true&size=large" frameborder="0" scrolling="0" width="115px" height="30px"></iframe>
      </v-container>
    </v-parallax>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Hero',

  methods: {
    handleGetStarted(): void {
      this.$router.push({ path: 'flexOptions/aligncontent' });
    },
  },
});
</script>

<style lang="scss">
#hero-view {
  button i {
    margin-left: 10px;
  }

  iframe {
    border: none;
    box-shadow: none;
  }
}
</style>
