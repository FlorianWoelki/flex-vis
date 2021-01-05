<template>
  <section class="flex flex-option-showcase">
    <v-space></v-space>
    <v-space xlarge></v-space>
    <v-container>
      <h1>Flex</h1>
      <v-divider short></v-divider>
      <p class="definition">
        The <kbd>flex</kbd> property sets the flexible length on flexible items.<br/>
        It is a shorthand for: flex-grow, flex-shrink and flex-basis
        (<kbd>flex: none | [ 'flex-grow' 'flex-shrink'? || 'flex-basis' ]</kbd>).
      </p>

      <Visualizer
        defaultFlexValue="0 1 auto"
        flexAttribute="flex"
        :flexOptions="flexOptions"
        :focusOneItem="true"
        :isFlexItem="true"
        :styleForAlternateSquares="{
          flex: '0 auto',
        }"
      >
        <template #additionalInformation>
          <span>All non highlighted squares are: <kbd>flex: 0 auto</kbd></span>
        </template>
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
  private flexOptions: string[] = ['1 0 auto', '0 1 auto', '0 auto', 'auto', 'none', '1'];
}
</script>
