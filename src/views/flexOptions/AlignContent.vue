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

      <v-row>
        <v-col c="5">
          <div class="showcase" :style="applyStyles">
            <div class="square">1</div>
            <div class="square">2</div>
            <div class="square">3</div>
            <div class="square">4</div>
          </div>
        </v-col>
        <v-col c="5" o="2">
          <v-dropdown>
            <template v-slot:button>
              <v-btn dropdown color="link">
                Alignments <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
              </v-btn>
            </template>
            <v-dropdown-item
              v-for="option in flexOptions"
              :key="option"
              @click="changeFlexOption(option)"
            >
              {{option}}
            </v-dropdown-item>
          </v-dropdown>
          <p>Default: <kbd>stretch</kbd></p>
          <v-space large></v-space>

          <CodeShowcase :flexOption="flexOption" flexAttribute="align-content"
          :customContent="true">
            <span class="css-key">flex-flow</span>: <span class="css-value">row wrap</span>;
          </CodeShowcase>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CodeShowcase from '@/components/flexOption/CodeShowcase.vue';

@Component({
  components: {
    CodeShowcase,
  },
})
export default class AlignContent extends Vue {
  private flexOption: string = 'stretch';

  private flexOptions: string[] = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'];

  changeFlexOption(option: string) {
    this.flexOption = option;
  }

  get applyStyles(): Object {
    return {
      'align-content': this.flexOption,
    };
  }
}
</script>
