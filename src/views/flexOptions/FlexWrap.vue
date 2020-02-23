<template>
  <section class="flex-option-showcase">
    <v-space></v-space>
    <v-space xlarge></v-space>
    <v-container>
      <h1>Flex Wrap</h1>
      <v-divider short></v-divider>
      <p class="definition">
        The <kbd>flex-wrap</kbd> property defines if the flex item should be on one line or
        should wrap to the next line, if needed.
      </p>

      <Visualizer
        dropdownButtonTitle="Wrap"
        defaultFlexValue="nowrap"
        flexAttribute="flex-wrap"
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
  private flexOptions: string[] = ['nowrap', 'wrap', 'wrap-reverse'];
}
</script>
