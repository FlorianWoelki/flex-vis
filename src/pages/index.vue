<template>
  <section id="home">
    <v-space large></v-space>
    <Hero></Hero>
    <Explanation></Explanation>
    <v-space xlarge></v-space>
    <WhyFlexbox></WhyFlexbox>
    <v-space></v-space>
    <Footer></Footer>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Hero from '@/components/Hero.vue';
import Explanation from '@/components/Explanation.vue';
import WhyFlexbox from '@/components/WhyFlexbox.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'Home',
  layout: 'navLayout',

  components: {
    Hero,
    Explanation,
    WhyFlexbox,
    Footer,
  },
});
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

.flex-option-showcase {
  min-height: 100vh;

  .divider {
    margin-top: 0;
  }

  .definition {
    font-size: 18px;
  }

  .showcase {
    border: 0.05rem solid #ccc;
    background-color: #ddd;
    height: 350px;
    padding: 1rem;
    display: flex;
    flex-flow: row wrap;

    .square {
      background-color: $main-color;
      height: 50px;
      width: 132px;

      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
    }

    &.different-sizes {
      .square:nth-child(2) {
        height: 125px;
      }
    }
  }
}
</style>
