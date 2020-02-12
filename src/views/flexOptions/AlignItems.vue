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

      <v-row>
        <v-col c="4">
          <div class="showcase" :style="applyStyles">
            <div class="square">1</div>
            <div class="square">2</div>
            <div class="square">3</div>
            <div class="square">4</div>
          </div>
        </v-col>
        <v-col c="6" o="2">
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

          <CodeShowcase :flexOption="flexOption" flexAttribute="align-items"></CodeShowcase>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CodeShowcase from '@/components/CodeShowcase.vue';

@Component({
  components: {
    CodeShowcase,
  },
})
export default class AlignItems extends Vue {
  private flexOption: string = 'stretch';

  private flexOptions: string[] = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'];

  changeFlexOption(option: string) {
    this.flexOption = option;
  }

  get applyStyles(): Object {
    return {
      'align-items': this.flexOption,
    };
  }
}
</script>
