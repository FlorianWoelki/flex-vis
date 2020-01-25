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
        <v-nav-dropdown-item
          v-for="item in flexOptionsSorted"
          :key="item"
          :href="`#/${flexOptionsRoutes(item)}`"
        >
          {{ item }}
        </v-nav-dropdown-item>
      </v-nav-dropdown>
    </v-nav-region>
    <v-nav-region position="right">
      <div class="custom-nav-item">
        <v-toggler id="dark-mode-checkbox" dataCheckIcon="DARK" dataUncheckIcon="LIGHT"></v-toggler>
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

  computed: {
    flexOptionsSorted(): string[] {
      const sorted = this.flexOptions;
      sorted.sort((a, b) => {
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
      });
      return sorted;
    },
  },

  methods: {
    flexOptionsRoutes(flexOption: string): string {
      return flexOption.replace('-', '');
    },
  },
});
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

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

  .form-ext-toggle {
    font-weight: bold;

    .form-ext-toggle__toggler {
      background-color: $darkmode-color;
      border-color: $darkmode-color;
    }

    input[type=checkbox]:checked+.form-ext-toggle__toggler {
      background-color: $lightmode-color;
      border-color: $lightmode-color;

      i {
        &::after {
          left: calc(100% - 25px);
        }
        &::before {
          color: #4d4d4d !important;
          right: 3px;
        }
      }
    }
  }

  .form-ext-toggle__toggler {
    width: 5.5rem;
    height: 1.7rem;
    font-size: 11px;

    i {
      font-style: initial;

      &:after {
        color: white;
        width: 24px;
        height: 24px;
        left: 1px;
      }

      &:before {
        color: white;
        padding-right: 3px;
        font-size: 15px;
        line-height: 23px;
        width: 77%;
      }
    }
  }
}
</style>
