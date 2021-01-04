<template>
  <pre>
    <v-code :value="code" lang="css" :dark="darkMode"></v-code>
  </pre>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';

@Component
export default class CodeShowcase extends Vue {
  @Prop({ type: String, required: true })
  private flexOption!: string;

  @Prop({ type: Boolean, default: false })
  private isFlexItem!: boolean;

  @Prop({ type: String, required: true })
  private flexAttribute!: string;

  private get darkMode(): boolean {
    return this.$store.state.darkMode;
  }

  private get code(): string {
    return `${this.isFlexItem ? '.flex-item' : '.container'} {
  display: flex;
  ${this.flexAttribute}: ${this.flexOption};${this.$slots.default ? `\n  ${this.$slots.default[0].text}` : ''}
}`;
  }
}
</script>
