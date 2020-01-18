<template>
  <v-navbar fixed>
    <template v-slot:brandTitle>
      <h6>Flexbox Visualizer</h6>
    </template>
    <v-nav-region position="left">
      <v-navbar-item blank href="https://github.com/FlorianWoelki/flex-vis">
        <i class="fab fa-github-alt fa-lg"></i>
      </v-navbar-item>
      <v-nav-dropdown animated>
        <template v-slot:title>Flex Options</template>
        <v-nav-dropdown-item v-for="item in flexOptions" :key="item">
          {{ item }}
        </v-nav-dropdown-item>
      </v-nav-dropdown>
    </v-nav-region>
    <v-nav-region position="right">
      <div class="custom-nav-item">
        <v-toggler id="dark-mode-checkbox" dataCheckIcon="🌝" dataUncheckIcon="🌞"></v-toggler>
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

  .form-ext-toggle input[type=checkbox]:checked+.form-ext-toggle__toggler i {
    &::after {
      left: calc(100% - 25px);
      background-color: #D5D7DC;
    }
    &::before {
      right: 3px;
    }
  }

  .form-ext-toggle__toggler {
    width: 3.5rem;
    height: 1.7rem;
    font-size: 11px;
    background-color: #4d4d4d !important;
    border-color: #4d4d4d !important;

    i {
      font-style: initial;

      &:after {
        width: 24px;
        height: 24px;
        left: 1px;
      }

      &:before {
        padding-right: 3px;
        font-size: 15px;
        line-height: 22px;
        width: 77%;
      }
    }
  }
}
</style>
