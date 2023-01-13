<template>
  <v-app-bar :floating="true" location="top" flat class="px-2 border-b-sm">
    <v-btn width="78px" height="48px" to="/" :ripple="false" flat color="transparent">
      <v-img :src="$vuetify.theme.name === 'light' ? vitoLogoLight : vitoLogoDark" width="72px" alt="비토 로고" />
    </v-btn>
    <v-app-bar-title v-if="!$vuetify.display.mobile" class="text-body-2 font-weight-regular">원하시는 기능에 함께 투표해주세요</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn class="text-caption font-weight-bold" :class="$style.suggestion" rounded><i class="mdi mdi-plus"></i>제안하기</v-btn>
  </v-app-bar>
  <TopNav />
</template>

<script setup>
import TopNav from "@/components/TopNav.vue";
const vitoLogoLight = new URL("@/assets/images/img_top_vito_light.png", import.meta.url).href
const vitoLogoDark = new URL("@/assets/images/img_top_vito_dark.png", import.meta.url).href

</script>

<style module lang="scss" scoped>
.suggestion {
  background: #2E67FE;
  color: white;
}

</style>