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
#align-content-showcase {
  .definition {
    font-size: 18px;
  }
}
</style>
