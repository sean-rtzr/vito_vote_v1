<template>
  <v-container fluid>
    <div :class="$style.subtitle">
      <div :class="$style.divider"></div>
      <v-card-text
        class="text-body-2"
        :class="$style.title"
        v-html="$attrs.title"
      ></v-card-text>
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
    white-space: nowrap;
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
