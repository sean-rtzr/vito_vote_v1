<template>
  <v-app :class="theme === 'light' ? $style.light : $style.dark" :theme="theme" >
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const theme = ref('light');


</script>

<style module lang="scss" scoped >

.light {
  background-color: #EFF3F6;
}
.dark {
   background-color: #111111;
 }
</style>
