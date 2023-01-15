<template>
  <v-card
    width="100%"
    height="100%"
    :max-width="
      $vuetify.display.mobile
        ? $vuetify.display.width.valueOf() > 600
          ? '300px'
          : '100%'
        : '340px'
    "
    min-height="350px"
    max-height="350px"
    class="rounded-lg"
    flat
    border
    @mouseenter.exact="$vuetify.display.mobile ? '' : moveUp"
    @mouseleave.exact="$vuetify.display.mobile ? '' : moveBack"
    :class="$style.wrapper"
  >
    <div :class="$style.title">
      <p :class="$vuetify.display.mobile ? $style.mobile : $style.else">
        "{{ props.title }}"
      </p>
      <v-spacer></v-spacer>
      <v-chip
        :class="
          props.status === 'progress'
            ? $style.progress
            : props.status === 'dev'
            ? $style.dev
            : $style.done
        "
        size="small"
        >{{ props.label }}</v-chip
      >
    </div>
    <v-divider class="mx-5" />
    <div class="text-grey-darken-2" :class="$style.description">
      {{ props.description }}
    </div>
    <div :class="$style.bottom">
      <v-btn
        size="x-large"
        flat
        variant="outlined"
        color="blue-lighten-4"
        icon
        :disabled="props.status === 'done' || props.status === 'dev'"
        @click="voted(id)"
      >
        <Vue3Lottie
          v-if="isVoted"
          :animationData="heartFilledLottie"
          :loop="false"
          :class="$style.voted"
          width="72px"
          height="72px"
        />
        <v-img v-else :src="heartImg" width="24px" />
      </v-btn>
      <p class="py-3 font-weight-medium text-grey">
        <strong class="text-black">{{ props.voteCount }}</strong> 명이 좋아해요
      </p>
    </div>
  </v-card>
</template>
<script setup>
import { ref, defineEmits } from "vue";
import { Vue3Lottie } from "@reslear/vue3-lottie";
import heartFilledLottie from "@/assets/lottie/heart_filled.json";

const heartImg = new URL("@/assets/images/img_card_heart.png", import.meta.url)
  .href;

const isVoted = ref(false);
const emits = defineEmits(["voted"]);
const props = defineProps([
  "id",
  "title",
  "description",
  "voteCount",
  "status",
  "label",
]);
const moveUp = (el) => {
  el.target.style.transform = "translateY(-6px)";
  el.target.style.transition = "all .4s";
  el.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
};
const moveBack = (el) => {
  el.target.style.transform = "translateY(0px)";
  el.target.style.transition = "all .4s";
  el.target.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
};

const voted = (id) => {
  isVoted.value = !isVoted.value;
  emits("voted", { id, isVoted });
};
</script>

<style module lang="scss" scoped>
.wrapper {
  position: relative;

  .title {
    display: flex;
    padding: 8px;

    .mobile {
      font-size: 14px;
      font-weight: 500;
      width: 64%;
      height: 100%;
      min-height: 40px;
      max-height: 40px;
      margin: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .else {
      font-size: 16px;
      font-weight: 500;
      width: 64%;
      height: 100%;
      min-height: 40px;
      max-height: 40px;
      margin: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .progress {
      margin-top: 12px;
      margin-right: 8px;
      padding: 0 12px;
      color: #b08d21;
      font-weight: 600;
      background-color: rgba(46, 103, 254, 0.01);
    }

    .dev {
      margin-top: 12px;
      margin-right: 8px;
      padding: 0 12px;
      color: #ffffff;
      font-weight: 600;
      background-color: #2e67fe;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    .done {
      margin-top: 12px;
      margin-right: 8px;
      padding: 0 12px;
      color: #999999;
      font-weight: 600;
      background-color: #f7f7f7;
      border: 1px solid rgba(0, 0, 0, 0.15);
    }
  }
  .description {
    padding: 20px;
    line-height: 1.6;
  }

  .bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 140px;

    .voted {
      position: absolute;
      left: -7px;
      bottom: -5px;
    }
  }
}
</style>
