<template>
  <v-container fluid>
    <div :class="$style.subtitle">
      <div :class="$style.divider"></div>
      <p class="text-body-2" :class="$style.title" v-html="$attrs.title"></p>
      <div :class="$style.divider"></div>
    </div>
  </v-container>
</template>

<script setup></script>

<style module lang="scss" scoped>
.subtitle {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    width: 100%;
    max-width: 100px;
    color: #8697a1;
  }

  .divider {
    width: 100%;
    height: 28px;
    background-image: url("@/assets/images/img_sutitle_divider.png");
    background-size: auto;
    background-position: center center;
    background-repeat: repeat-x;
  }
}
</style>
