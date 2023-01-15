<template>
  <v-footer class="bg-transparent text-center d-flex flex-column pa-16">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon.name"
        class="text-body-2"
        color="grey-darken-1"
        :icon="icon.name"
        variant="text"
        @click="openWindow(icon.link)"
      ></v-btn>
    </div>

    <v-divider></v-divider>

    <div :class="$style.description">
      {{ new Date().getFullYear() }} — <strong>Return Zero.Inc</strong>
    </div>
  </v-footer>
</template>

<script setup>
const icons = [
  {
    name: "mdi-facebook",
    link: "https://www.facebook.com/VoiceInTextOut",
  },
  {
    name: "mdi-twitter",
    link: "https://twitter.com/VITO_RETURNZERO",
  },
  {
    name: "mdi-linkedin",
    link: "https://www.youtube.com/channel/UCq8zmsRkDbq329UL_59nGWQ",
  },
  {
    name: "mdi-instagram",
    link: "https://www.instagram.com/vito__ai/",
  },
];

const openWindow = (link) => window.open(link, "_blank");
</script>

<style module lang="scss" scoped>
.description {
  font-size: 12px;
  color: #666666;
  padding-top: 12px;
}
</style>
