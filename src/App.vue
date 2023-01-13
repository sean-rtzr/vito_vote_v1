<template>
  <v-app :theme="theme">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const theme = ref('light');


</script>

<style lang="scss" scoped>

</style>
