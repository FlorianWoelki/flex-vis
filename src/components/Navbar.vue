<template>
  <v-navbar>
    <template v-slot:brandTitle>
      <h6>Flexbox Visualizer</h6>
    </template>
    <v-nav-region position="left">
      <v-navbar-item>GitHub</v-navbar-item>
    </v-nav-region>
    <v-nav-region position="right">
      <div class="custom-nav-item">
        <v-toggler id="dark-mode-checkbox" dataCheckIcon="🌤" dataUncheckIcon="🌙"></v-toggler>
      </div>
    </v-nav-region>
  </v-navbar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
});
</script>

<style lang="scss">
.header {
  .custom-nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #dark-mode-checkbox {
    text-align: initial;
    padding-left: 0;
  }
}
</style>
