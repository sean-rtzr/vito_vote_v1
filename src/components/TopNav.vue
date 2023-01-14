<template>
  <v-card color="transparent" flat>
    <v-tabs
      v-model="tab"
      slider-color="blue"
      color="blue"
      :class="$style.wrapper"
      :ripple="false"
    >
      <v-tab value="one" class="font-weight-bold" :ripple="false"
        >진행중인 아이디어</v-tab
      >
      <v-tab value="two" class="font-weight-bold" :ripple="false">완료됨</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item
          value="one"
          :class="$vuetify.display.mobile ? $style.mobile : $style.else"
        >
          <SubTitle title="서비스 개선" />
          <Card v-for="n in 3" :key="n" status="progress" />
          <SubTitle title="결제/계정" />
          <Card v-for="n in 2" :key="n" status="progress" />
        </v-window-item>

        <v-window-item value="two">
          <SubTitle title="개발 완료" />
          <Card status="progress" />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import SubTitle from "@/components/SubTitle.vue";
import Card from "@/components/Card.vue";

const tab = ref(null);
</script>

<style module lang="scss" scoped>
.wrapper {
  background-color: #f7f9fc;
}
.mobile {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 4px;
}

.else {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0 20px;
}
</style>
