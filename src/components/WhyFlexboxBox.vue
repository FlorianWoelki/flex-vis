<template>
  <v-card equalHeight class="u-text-center">
    <i :class="`fas fa-${icon} fa-5x`"></i>
    <h5>{{ title }}</h5>
    <p>
      <slot></slot>
    </p>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class WhyFlexboxBox extends Vue {
  @Prop({ type: String })
  public title!: string;

  @Prop({ type: String })
  public icon!: string;

  private get darkMode(): boolean {
    return this.$store.state.darkMode;
  }
}
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.card {
  padding: 25px;

  i {
    color: $main-color;
  }
}

.dark .card {
  background-color: rgba(0, 0, 0, 0.87);
}
</style>
