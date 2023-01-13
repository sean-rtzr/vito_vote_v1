<template>
  <v-container fluid>
    <div :class="$style.subtitle">
      <div>line</div>
      <div >Subtitle</div>
      <div>line</div>
    </div>
  </v-container>
</template>

<script setup>

</script>

<style module lang="scss" scoped>
.subtitle {
  display: flex;
  margin: 0 auto;
  text-align: center;
  background: red;

  div {
    flex: 1;
  }
  div:first-child, div:last-child {
    flex: 2;
  }
}
</style>