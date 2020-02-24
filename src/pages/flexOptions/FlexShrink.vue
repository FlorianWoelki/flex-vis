<template>
  <section class="flex-option-showcase">
    <v-space></v-space>
    <v-space xlarge></v-space>
    <v-container>
      <h1>Flex Shrink</h1>
      <v-divider short></v-divider>
      <p class="definition">
        The <kbd>flex-shrink</kbd> property defines how much a specific flex item should shrink.
      </p>

      <Visualizer
        dropdownButtonTitle="Shrink"
        defaultFlexValue="1"
        flexAttribute="flex-shrink"
        :flexOptions="flexOptions"
        :focusOneItem="true"
        :isFlexItem="true"
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
export default class AlignContent extends Vue {
  private flexOptions: string[] = ['1', '2', '3', '4'];
}
</script>
