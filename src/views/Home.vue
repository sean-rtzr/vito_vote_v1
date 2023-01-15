<template>
  <FirstPopup :isOpen="isFirst" @close="close" />
  <NewSuggestion
    :dialog="isOpenSuggestionPopup"
    @close="isOpenSuggestionPopup = !isOpenSuggestionPopup"
  />
  <v-app-bar :floating="true" location="top" flat class="px-3 border-b-sm">
    <v-btn
      width="78px"
      height="48px"
      to="/"
      :ripple="false"
      flat
      color="transparent"
    >
      <v-img
        :src="$vuetify.theme.name === 'light' ? vitoLogoLight : vitoLogoDark"
        width="72px"
        alt="비토 로고"
      />
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      class="text-caption font-weight-bold"
      :class="$style.suggestion"
      rounded
      @click="openSuggestionPopup"
      ><i class="mdi mdi-plus"></i>직접 제안하기</v-btn
    >
  </v-app-bar>
  <TopNav />
  <Footer />
</template>

<script setup>
import { ref, onBeforeMount } from "vue";
import TopNav from "@/components/TopNav.vue";
import FirstPopup from "@/components/FirstPopup.vue";
import NewSuggestion from "@/components/NewSuggestion.vue";
import Footer from "@/components/Footer.vue";

let isFirst = ref(true);
let isOpenSuggestionPopup = ref(false);
const vitoLogoLight = new URL(
  "@/assets/images/img_top_vito_light.png",
  import.meta.url
).href;
const vitoLogoDark = new URL(
  "@/assets/images/img_top_vito_dark.png",
  import.meta.url
).href;
const close = () => {
  isFirst.value = false;
  localStorage.setItem("isFirst", "visited");
};
const openSuggestionPopup = () =>
  (isOpenSuggestionPopup.value = !isOpenSuggestionPopup.value);

onBeforeMount(() => {
  // const checkFirst = localStorage.getItem("isFirst");
  // checkFirst === "visited" ? (isFirst.value = false) : "";
});
</script>

<style module lang="scss" scoped>
.suggestion {
  background: #2e67fe;
  color: white;
}
</style>
