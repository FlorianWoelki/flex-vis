<template>
  <!-- eslint-disable-->
  <pre>
    <code :class="`code-showcase${darkMode ? ' dark' : ''}`" data-lang="CSS">
<span v-if="isFlexItem" class="css-class">.flex-item</span><span v-else class="css-class">.container</span> {
  <span class="css-key">display</span>: <span class="css-value">flex</span>;<br v-if="customContent"/>  <slot v-if="customContent"></slot>
  <span class="css-key">{{this.flexAttribute}}</span>: <span class="css-value">{{this.flexOption}}</span>;
}
    </code>
  </pre>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';

@Component({})
export default class CodeShowcase extends Vue {
  @Prop()
  private flexOption!: string;

  @Prop({ default: false })
  private customContent!: boolean;

  @Prop({ default: false })
  private isFlexItem!: boolean;

  @Prop()
  private flexAttribute!: string;

  private get darkMode(): boolean {
    return this.$store.state.darkMode;
  }
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

code {
  background: #f6f8fa;
  display: block;
  color: #333;
  overflow-x: auto;
  max-height: 750px;

  &.code-showcase {
    padding: 1.5rem 1.5rem 1rem !important;
  }

  .css-key {
    color: $css-key-color;
  }

  .css-value {
    color: $css-value-color;
  }

  .css-class {
    color: $css-class-color;
  }
}
</style>
