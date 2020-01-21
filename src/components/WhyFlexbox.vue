<template>
  <section id="why-learning-flexbox">
    <v-container>
      <h3 class="u-text-center">Why learning Flexbox?</h3>
    </v-container>
    <v-space xlarge></v-space>

    <v-container >
      <v-row>
        <v-col class="u-center" c="4">
          <WhyFlexboxBox title="Better lay out" icon="ruler">
            With flexbox you can easily layout your modern webapp.
          </WhyFlexboxBox>
        </v-col>
        <v-col class="u-center" c="4">
          <WhyFlexboxBox title="More flexible" icon="align-center">
            Flexbox is just a little bit of code, which is really flexible.
          </WhyFlexboxBox>
        </v-col>
        <v-col class="u-center" c="4">
          <WhyFlexboxBox title="Modern tech" icon="microchip">
            Flexbox is the easiest way to go, when learning responsive design.
          </WhyFlexboxBox>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import WhyFlexboxBox from './WhyFlexboxBox.vue';

export default Vue.extend({
  name: 'WhyFlexbox',

  components: {
    WhyFlexboxBox,
  },
});
</script>

<style lang="scss">
#why-learning-flexbox {
  .card {
    padding: 25px;
  }
}
</style>
