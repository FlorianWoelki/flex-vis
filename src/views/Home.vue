<template>
  <section id="home">
    <Hero></Hero>
    <Explanation></Explanation>
    <WhyFlexbox></WhyFlexbox>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Hero from '@/components/Hero.vue';
import Explanation from '@/components/Explanation.vue';
import WhyFlexbox from '@/components/WhyFlexbox.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    Hero,
    Explanation,
    WhyFlexbox,
  },
});
</script>
