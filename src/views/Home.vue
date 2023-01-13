<template>
  <v-app-bar :floating="true" location="top" flat class="px-2">
    <v-btn width="78px" height="48px" to="/" :ripple="false" flat color="transparent">
      <v-img :src="vitoLogo" width="72px" alt="비토 로고" />
    </v-btn>
    <v-app-bar-title class="text-body-2 font-weight-regular"><span v-if="!$vuetify.display.mobile">원하시는 기능에 </span>함께 투표해주세요</v-app-bar-title>
    <v-btn class="text-caption font-weight-bold" :class="$style.suggestion" rounded><i class="mdi mdi-plus"></i>제안하기</v-btn>
  </v-app-bar>
</template>

<script setup>

const vitoLogo = new URL("@/assets/images/img_top_vito_logo.png", import.meta.url).href

</script>

<style module lang="scss" scoped>
.suggestion {
  background: #2E67FE;
  color: white;
}

</style>