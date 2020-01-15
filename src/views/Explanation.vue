<template>
  <section id="explanation-view" class="white u-text-center">
    <h3>This is a coming up explanation</h3>
    <v-space large></v-space>
    <v-btn color="light" size="large" class="font-bold u-center">Get Started!</v-btn>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Explanation',
});
</script>

<style lang="scss">
#explanation-view {
  padding: 75px;
  background-color: rgb(94, 92, 199);
}
</style>
