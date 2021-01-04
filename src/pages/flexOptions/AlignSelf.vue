<template>
  <section class="flex-option-showcase">
    <v-space></v-space>
    <v-space xlarge></v-space>
    <v-container>
      <h1>Align Self</h1>
      <v-divider short></v-divider>
      <p class="definition">
        The <kbd>align-self</kbd> property allows to override the
        <kbd>align-items</kbd> value for specific flex items.
      </p>

      <Visualizer
        defaultFlexValue="stretch"
        flexAttribute="align-self"
        :flexOptions="flexOptions"
        :focusOneItem="true"
        :isFlexItem="true"
        differentSize
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
  private flexOptions: string[] = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];
}
</script>
