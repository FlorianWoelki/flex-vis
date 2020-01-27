<template>
  <section id="align-content-showcase">
    <v-space xlarge></v-space>
    <v-space xlarge></v-space>
    <v-container>
      <h1>Align Content</h1>
      <v-divider short></v-divider>
      <p class="definition">
        The <kbd>align-content</kbd> aligns the flex lines horizontally.
      </p>

      <div class="showcase">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>

      <v-space large></v-space>

      <v-dropdown>
        <template v-slot:button>
          <v-btn dropdown color="link">
            Alignments <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
          </v-btn>
        </template>
        <v-dropdown-item>Normal</v-dropdown-item>
      </v-dropdown>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AlignContent',
});
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

#align-content-showcase {
  .definition {
    font-size: 18px;
  }

  .showcase {
    border: 0.05rem solid #ccc;
    border-radius: 5px;
    height: 350px;
    -moz-box-shadow: inset 0 0 6px #333;
    -webkit-box-shadow: inset 0 0 6px #333;
    box-shadow: inset 0 0 6px #333;
    padding: 1rem;
    display: flex;
    flex-flow: row wrap;
    align-content: center;

    .square {
      background-color: $main-color;
      border-radius: 5px;
      height: 50px;
      width: 50px;
      border: 1px solid #333;
    }
  }
}
</style>
