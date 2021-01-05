<template>
  <v-row level>
    <v-col c="5">
      <div v-if="!differentSize" class="showcase">
        <div
          class="showcase-wrapper"
          :style="{
            ...applyStyles,
            width: `${containerWidth}%`,
            'flex-flow': $slots.default ? 'row wrap' : null
          }"
        >
          <div v-if="focusOneItem" id="focused-square" class="square" :style="applyStyles">1</div>
          <div v-else class="square">1</div>
          <div class="square" :style="styleForAlternateSquares">2</div>
          <div class="square" :style="styleForAlternateSquares">3</div>
          <div class="square" :style="styleForAlternateSquares">4</div>
        </div>
      </div>
      <div v-else class="showcase different-sizes">
        <div
          class="showcase-wrapper"
          :style="{
            ...applyStyles,
            width: `${containerWidth}%`,
            'flex-flow': $slots.default ? 'row wrap' : null
          }"
        >
          <div v-if="focusOneItem" id="focused-square" class="square" :style="applyStyles">1</div>
          <div v-else class="square">1</div>
          <div class="square">2</div>
        </div>
      </div>
    </v-col>
    <v-col c="5" o="2">
      <div class="u-flex u-flex-column">
        <div class="mb-4 width-slider u-flex u-flex-column">
          <p class="mb-0 text-gray-700">Container width: {{ containerWidth }}%</p>
          <input v-model="containerWidth" type="range" min="1" max="100">
        </div>
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
          <p class="text-gray-700">
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

  private containerWidth = 100;

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

.width-slider {
  width: 100%;
  border: none;

  input[type="range"] {
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    -webkit-appearance: none;
    background: transparent;

    &:focus {
      box-shadow: none !important;
      border: none !important;
    }

    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      width: 100%;
      height: 0.3em;
      background: #5e5cc7;
      border-radius: 1em;
    }

    &::-webkit-slider-thumb {
      height: 1em;
      width: 1em;
      border-radius: 1em;
      background: #e74c3c;
      margin-top: -0.35em;
      -webkit-appearance: none;
    }
  }
}

.showcase {
  border: 0.05rem solid #ccc;
  background-color: #ddd;
  height: 350px;
  padding: 1rem;

  .showcase-wrapper {
    display: flex;
    height: 100%;
  }

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
