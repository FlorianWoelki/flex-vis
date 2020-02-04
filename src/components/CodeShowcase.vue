<template>
  <pre>
    <code class="code-showcase" data-lang="CSS">
<span class="css-class">.container</span> {
  <span class="css-key">display</span>: <span class="css-value">flex</span>;
  <span class="css-key">flex-flow</span>: <span class="css-value">row wrap</span>;
  <span class="css-key">align-content</span>: <span class="css-value">{{this.flexOption}}</span>;
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
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

code {
  &.code-showcase {
    padding: 1.5rem 1.5rem 1rem !important;
  }

  background: #f6f8fa;
  display: block;
  color: #333;
  overflow-x: auto;
  max-height: 750px;

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
