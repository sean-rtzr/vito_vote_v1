<template>
  <v-app-bar flat>
    <v-btn height="48px" href="/">
      <v-img :src="vitoLogo" width="88px" alt="비토 로고" />
    </v-btn>
  </v-app-bar>
</template>

<script setup>

const vitoLogo = new URL("@/assets/images/img_top_vito_logo.png", import.meta.url).href

</script>

<style lang="scss" scoped>

</style>