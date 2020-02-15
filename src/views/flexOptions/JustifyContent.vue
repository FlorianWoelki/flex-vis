<template>
  <section class="flex-option-showcase">
    <v-space></v-space>
    <v-space xlarge></v-space>
    <v-container>
      <h1>Justify Content</h1>
      <v-divider short></v-divider>
      <p class="definition">
        The <kbd>justify-content</kbd> property defines the alignment along the main axis.
      </p>

      <Visualizer
        defaultFlexValue="flex-start"
        flexAttribute="justify-content"
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
})
export default class AlignItems extends Vue {
  private flexOptions: string[] = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];
}
</script>
