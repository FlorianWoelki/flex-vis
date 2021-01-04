<template>
  <v-navbar ref="navbar" clear fixed :dark="darkMode">
    <template #brandTitle>
      <router-link to="/">
        <h6>Flexbox Visualizer</h6>
      </router-link>
    </template>
    <v-nav-region position="left">
      <v-navbar-item target="_blank" href="https://github.com/FlorianWoelki/flex-vis">
        <i class="fab fa-github-alt fa-lg"></i>
      </v-navbar-item>
      <v-nav-dropdown animated>
        <template v-slot:title>Flex Options</template>
        <v-nav-dropdown-item
          v-for="item in flexOptionsSorted"
          :key="item"
          :href="`#/flexOptions/${flexOptionsRoutes(item)}`"
        >
          {{ item }}
        </v-nav-dropdown-item>
      </v-nav-dropdown>
    </v-nav-region>
    <!--<v-nav-region position="right">
      <div class="custom-nav-item">
        <v-toggle
          id="dark-mode-checkbox"
          dataCheckIcon="DARK"
          dataUncheckIcon="LIGHT"
          @change="toggleDarkMode()"
        ></v-toggle>
      </div>
    </v-nav-region>-->
  </v-navbar>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({})
export default class Navbar extends Vue {
  private flexOptions: Array<String> = [
    'order', 'flex-direction', 'flex-grow', 'flex-wrap', 'flex-shrink',
    'justify-content', 'flex', 'align-self', 'align-items', 'align-content',
  ];

  mounted() {
    const navbarElement = (this.$refs.navbar as any).$el as HTMLElement;
    /* eslint-disable-next-line */
    window.addEventListener('scroll', function (_) {
      const scroll = this.scrollY;

      if (navbarElement !== null) {
        if (scroll >= 50) {
          navbarElement.classList.remove('header-clear');
        } else {
          navbarElement.classList.add('header-clear');
        }
      }
    });
  }

  private get darkMode(): boolean {
    return this.$store.state.darkMode;
  }

  private get flexOptionsSorted(): String[] {
    const sorted = this.flexOptions;
    sorted.sort((a, b) => {
      if (a > b) return 1;
      if (b > a) return -1;
      return 0;
    });
    return sorted;
  }

  private toggleDarkMode(): void {
    this.$store.commit('toggleDarkMode');
  }

  private flexOptionsRoutes(flexOption: string): String {
    return flexOption.replace('-', '');
  }
}
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
