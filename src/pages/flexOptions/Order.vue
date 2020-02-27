<template>
  <section class="flex-option-showcase">
    <v-space></v-space>
    <v-space xlarge></v-space>
    <v-container>
      <h1>Order</h1>
      <v-divider short></v-divider>
      <p class="definition">
        The <kbd>order</kbd> property displays the flex item in a field of choice.
      </p>

      <Visualizer
        defaultFlexValue="0"
        flexAttribute="order"
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
  layout: 'navLayout',
})
export default class AlignContent extends Vue {
  private flexOptions: string[] = ['0', '1', '2', '3'];
}
</script>
