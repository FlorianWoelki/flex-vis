<template>
  <section id="explanation-view" class="white u-text-center">
    <v-container>
      <h5 class="font-normal">
        You can use this page for learning purposes.<br/>
        It is there to <b>visualize</b> and <b>explain</b> the <b>CSS Flexbox functionality</b>.
      </h5>
      <v-space></v-space>
      <v-btn color="light" size="large" class="font-bold u-center" @click="handleGetStarted">
        Get Started!
      </v-btn>
    </v-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Explanation',

  methods: {
    handleGetStarted(): void {
      this.$router.push({ path: 'aligncontent' });
    },
  },
});
</script>

<style lang="scss">
@import '@/scss/_variables.scss';

#explanation-view {
  padding: 75px;
  background-color: $main-color;
}
</style>
