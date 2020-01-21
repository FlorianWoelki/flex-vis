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
}
</script>

<style lang="scss">
.card {
  padding: 25px;

  h5, i {
    color: rgb(94, 92, 199);
  }
}
</style>
