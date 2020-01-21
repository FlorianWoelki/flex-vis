<template>
  <v-footer title="Flexbox Visualizer" subtitle="© 2020 Florian Woelki">
    <p>
      Built with <i class="fas fa-heart animated pulse"></i> with <a target="_blank" href="https://github.com/FlorianWoelki/vue-cirrus/">Vue-Cirrus</a>
    </p>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
});
</script>

<style lang="scss">
footer {
  padding-top: 50px;
  padding-bottom: 50px;

  .fa-heart {
    color: red;
  }
}
</style>
