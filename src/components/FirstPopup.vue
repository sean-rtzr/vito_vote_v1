<template>
  <v-dialog v-model="props.isOpen" transition="dialog-bottom-transition">
    <template v-slot:default="{ isActive }">
      <v-card
        width="100%"
        max-width="288px"
        height="300px"
        :class="$style.card"
        class="flex flex-column align-center mx-auto rounded-xl"
      >
        <div
          :class="$style.top"
          class="flex flex-column align-center justify-center"
        >
          <Vue3Lottie
            :animationData="heart"
            :loop="false"
            :delay="500"
            width="98px"
            height="98px"
          />
          <v-card-title :class="$style.title">좋아요를 눌러보세요</v-card-title>
          <v-card-text :class="$style.description"
            >원하시는 기능에 <strong>‘좋아요’</strong>로 투표하시면 VITO 팀이
            개발해드려요.</v-card-text
          >
        </div>
        <v-btn flat :class="$style.close" @click="$emit('close')"
          >좋아요!</v-btn
        >
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { Vue3Lottie } from "@reslear/vue3-lottie";
import heart from "@/assets/lottie/heart.json";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const heartImg = new URL(
  "@/assets/images/img_firstpopup_heart.png",
  import.meta.url
).href;
</script>

<style module lang="scss" scoped>
.card {
  position: relative;
  background: #2e67fe;
  padding: 20px;

  .top {
    display: flex;
    justify-content: center;
    text-align: center;

    .title {
      width: 100%;
      color: #ffffff;
    }

    .description {
      width: 100%;
      color: #ffffff;
    }
  }
  .close {
    position: absolute;
    width: 100%;
    max-width: 120px;
    height: 40px;
    border-radius: 20px;
    bottom: 28px;
    color: #444444;
  }
}
</style>
