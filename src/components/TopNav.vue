<template>
  <v-card color="transparent" flat class="pt-4 ">
    <v-tabs
        v-model="tab"
        bg-color="transparent"
        align-tabs="center"
        slider-color="blue"
        color="blue"
        class="border-b-sm"
        mandatory="true"
        :ripple="false"
    >
        <v-tab value="one" class="font-weight-bold" :ripple="false">진행중인 아이디어</v-tab>
        <v-tab value="two" class="font-weight-bold" :ripple="false">완료됨</v-tab>



    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          진행중인 목록
        </v-window-item>

        <v-window-item value="two">
          완료된 목록
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const tab = ref(null);

</script>

<style module lang="scss" scoped>
$tab-slider-size: 8px;
</style>