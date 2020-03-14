<template>
  <v-row>
    <v-col c="5">
      <div class="showcase" :style="!focusOneItem ? applyStyles : null">
        <div v-if="focusOneItem" id="focused-square" class="square" :style="applyStyles">1</div>
        <div v-else class="square">1</div>
        <div class="square">2</div>
        <div class="square">3</div>
        <div class="square">4</div>
      </div>
    </v-col>
    <v-col c="5" o="2">
      <v-dropdown :dark="darkMode">
        <template v-slot:button>
          <v-btn dropdown color="link">
            {{ dropdownButtonTitle }}
            <span class="icon"><i class="fa fa-wrapper fa-caret-down"></i></span>
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
      <p>Default: <kbd>{{ defaultFlexValue }}</kbd></p>
      <v-space large></v-space>

      <CodeShowcase
        :flexOption="flexOption"
        :flexAttribute="flexAttribute"
        :customContent="customContent"
        :isFlexItem="isFlexItem"
      >
        <slot></slot>
      </CodeShowcase>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import CodeShowcase from '@/components/flexOption/CodeShowcase.vue';

@Component({
  components: {
    CodeShowcase,
  },
})
export default class Visualizer extends Vue {
  @Prop({ default: 'Alignments' })
  private dropdownButtonTitle!: string;

  @Prop()
  private focusOneItem!: boolean;

  @Prop({ default: null })
  private defaultFlexValue!: string;

  @Prop()
  private customContent!: boolean;

  @Prop()
  private isFlexItem!: boolean;

  @Prop({ default: null })
  private flexAttribute!: string;

  @Prop({ default: null })
  private flexOptions!: string[];

  private flexOption: string = this.defaultFlexValue;

  changeFlexOption(option: string) {
    this.flexOption = option;
  }

  private get darkMode(): boolean {
    return this.$store.state.darkMode;
  }

  get applyStyles(): Object {
    return {
      [this.flexAttribute]: this.flexOption,
    };
  }
}
</script>

<style lang="scss">
#focused-square {
  background-color: #e74c3c;
}
</style>
