<template>
  <section class="flex-option-showcase">
    <v-space></v-space>
    <v-space xlarge></v-space>
    <v-container>
      <h1>Align Content</h1>
      <v-divider short></v-divider>
      <p class="definition">
        The <kbd>align-content</kbd> aligns the flex lines or the container
        with the items inside horizontally.
      </p>

      <Visualizer
        defaultFlexValue="stretch"
        flexAttribute="align-content"
        :flexOptions="flexOptions"
      >flex-flow: row wrap;</Visualizer>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Visualizer from '@/components/flexOption/Visualizer.vue';

@Component({
  components: {
    Visualizer,
  },
  layout: 'navLayout',
})
export default class AlignContent extends Vue {
  private flexOptions: string[] = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'];
}
</script>
