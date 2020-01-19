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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </WhyFlexboxBox>
        </v-col>
        <v-col class="u-center" c="4">
          <WhyFlexboxBox title="More flexible" icon="align-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </WhyFlexboxBox>
        </v-col>
        <v-col class="u-center" c="4">
          <WhyFlexboxBox title="Modern tech" icon="microchip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
