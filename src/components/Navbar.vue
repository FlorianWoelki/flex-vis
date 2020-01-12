<template>
  <v-navbar>
    <template v-slot:brandTitle>
      <h6>Flexbox Visualizer</h6>
    </template>
    <v-nav-region position="left">
      <v-navbar-item blank href="https://github.com/FlorianWoelki/flex-vis">GitHub</v-navbar-item>
    </v-nav-region>
    <v-nav-region position="center">
      <v-nav-dropdown animated>
        <template v-slot:title>Flex Options</template>
        <v-nav-dropdown-item v-for="item in flexOptions" :key="item">
          {{ item }}
        </v-nav-dropdown-item>
      </v-nav-dropdown>
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

  data() {
    return {
      flexOptions: [
        'order', 'direction', 'grow', 'wrap', 'shrink',
        'justify-content', 'flex', 'align-self', 'align-items', 'align-content',
      ],
    };
  },
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
