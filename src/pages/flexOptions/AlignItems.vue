<template>
  <section class="flex-option-showcase">
    <v-space></v-space>
    <v-space xlarge></v-space>
    <v-container>
      <h1>Align Items</h1>
      <v-divider short></v-divider>
      <p class="definition">
        The <kbd>align-items</kbd> property aligns the items themself and not the container.
      </p>

      <Visualizer
        defaultFlexValue="stretch"
        flexAttribute="align-items"
        :flexOptions="flexOptions"
      >
      </Visualizer>
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
export default class AlignItems extends Vue {
  private flexOptions: string[] = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
}
</script>
