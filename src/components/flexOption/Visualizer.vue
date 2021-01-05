<template>
  <v-row level>
    <v-col c="5">
      <div v-if="!differentSize" class="showcase" :style="!focusOneItem ? applyStyles : null">
        <div v-if="focusOneItem" id="focused-square" class="square" :style="applyStyles">1</div>
        <div v-else class="square">1</div>
        <div class="square" :style="styleForAlternateSquares">2</div>
        <div class="square" :style="styleForAlternateSquares">3</div>
        <div class="square" :style="styleForAlternateSquares">4</div>
      </div>
      <div v-else class="showcase different-sizes" :style="!focusOneItem ? applyStyles : null">
        <div v-if="focusOneItem" id="focused-square" class="square" :style="applyStyles">1</div>
        <div v-else class="square">1</div>
        <div class="square">2</div>
      </div>
    </v-col>
    <v-col c="5" o="2">
      <div class="u-flex u-flex-column">
        <div>
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
          <p>
            Default: <kbd>{{ defaultFlexValue }}</kbd>
            <slot name="additionalInformation"></slot>
          </p>
        </div>

        <CodeShowcase
          :flexOption="flexOption"
          :flexAttribute="flexAttribute"
          :isFlexItem="isFlexItem"
        >
          <slot></slot>
        </CodeShowcase>
      </div>
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
  @Prop({ type: String, default: 'Alignments' })
  private dropdownButtonTitle!: string;

  @Prop({ type: Boolean, default: false })
  private focusOneItem!: boolean;

  @Prop({ type: String, default: '' })
  private defaultFlexValue!: string;

  @Prop({ type: Boolean, default: false })
  private differentSize!: boolean;

  @Prop({ type: Boolean, default: false })
  private isFlexItem!: boolean;

  @Prop({ type: String, default: '' })
  private flexAttribute!: string;

  @Prop({ type: Array, default: [] })
  private flexOptions!: string[];

  @Prop({ type: String, default: '' })
  private styleForAlternateSquares!: string;

  private flexOption: string = this.defaultFlexValue;

  private changeFlexOption(option: string): void {
    this.flexOption = option;
  }

  private get darkMode(): boolean {
    return this.$store.state.darkMode;
  }

  private get applyStyles(): Object {
    return {
      [this.flexAttribute]: this.flexOption,
    };
  }
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';
#focused-square {
  background-color: #e74c3c;
}

.showcase {
  border: 0.05rem solid #ccc;
  background-color: #ddd;
  height: 350px;
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;

  .square {
    background-color: $main-color;
    height: 50px;
    width: 132px;

    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;

    &:nth-child(2) {
      order: 0;
    }
    &:nth-child(3) {
      order: 1;
    }
    &:nth-child(4) {
      order: 2;
    }
  }

  &.different-sizes {
    .square:nth-child(2) {
      height: 125px;
    }
  }
}
</style>
