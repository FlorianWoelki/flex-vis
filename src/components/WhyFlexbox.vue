<template>
  <section id="why-learning-flexbox">
    <v-container>
      <h3 class="u-text-center">Why learning Flexbox?</h3>
    </v-container>
    <v-space xlarge></v-space>

    <v-container >
      <v-row>
        <v-col class="u-center" c="4">
          <v-card class="u-text-center">
            <i class="fas fa-university fa-5x"></i>
            <h5>Better lay out</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </v-card>
        </v-col>
        <v-col class="u-center" c="4">
          <v-card class="u-text-center">
            <i class="fas fa-university fa-5x"></i>
            <h5>More flexible</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </v-card>
        </v-col>
        <v-col class="u-center" c="4">
          <v-card class="u-text-center">
            <i class="fas fa-university fa-5x"></i>
            <h5>Modern technology</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'WhyFlexbox',
});
</script>

<style lang="scss">
#why-learning-flexbox {
  .card {
    padding: 25px;
  }
}
</style>
