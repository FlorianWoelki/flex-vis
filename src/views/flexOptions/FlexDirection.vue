<template>
  <section class="flex-option-showcase">
    <v-space></v-space>
    <v-space xlarge></v-space>
    <v-container>
      <h1>Flex Direction</h1>
      <v-divider short></v-divider>
      <p class="definition">
        The <kbd>flex-direction</kbd> property defines how flexbox items
        are ordered within a flexbox container.
      </p>

      <Visualizer
        defaultFlexValue="row"
        flexAttribute="flex-direction"
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
  private flexOptions: string[] = ['row', 'row-reverse', 'column', 'column-reverse'];
}
</script>
