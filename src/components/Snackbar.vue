<template>
  <v-snackbar
    v-model="props.isSnackbarOpen"
    :timeout="2000"
    color="primary"
    variant="tonal"
  >
    투표해주셔서 감사해요!
  </v-snackbar>
</template>

<script setup>
const props = defineProps({
  isSnackbarOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
