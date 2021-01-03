<template>
  <!-- eslint-disable-->
  <pre>
    <v-code lang="css" :dark="darkMode">{{ code }}</v-code>
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

  private get code(): string {
    return `${this.isFlexItem ? '.flex-item' : '.container'} {
  display: flex;
  ${this.flexAttribute}: ${this.flexOption};
  ${this.$slots.default![0].text}
}`;
  }
}
</script>
