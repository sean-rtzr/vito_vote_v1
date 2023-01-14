<template>
  <v-card
    width="100%"
    height="100%"
    max-width="350px"
    min-height="350px"
    max-height="350px"
    class="rounded-lg"
    flat
    border
    @mouseenter.exact="moveUp"
    @mouseleave.exact="moveBack"
    :class="$style.wrapper"
  >
    <div :class="$style.title">
      <p :class="$vuetify.display.mobile ? $style.mobile : $style.else">
        내용일이삼사오육칠팔구십일내용일이삼사오육칠팔구십일내용일이삼사오육칠팔구십일
      </p>
      <v-spacer></v-spacer>
      <v-chip
        :class="$attrs.status === 'progress' ? $style.progress : $style.done"
        size="small"
        >투표중</v-chip
      >
    </div>
    <v-divider />
    <div class="pa-5">
      불필요한 녹음파일들까지 클라우드에 저장되어 용량을 차지하고 있어요. 내가
      원하는 파일들만 저장될 수 있게 해주세요.
    </div>
    <div :class="$style.bottom">
      <v-btn size="x-large" flat variant="outlined" color="blue" icon>
        <v-img :src="heart" width="24px" />
      </v-btn>
      <p class="py-3 font-weight-medium text-grey">
        <strong class="text-black">2000</strong> 명이 좋아해요
      </p>
    </div>
  </v-card>
</template>

<script setup>
const heart = new URL("@/assets/images/img_card_heart.png", import.meta.url)
  .href;

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
</script>

<style module lang="scss" scoped>
.wrapper {
  position: relative;

  .title {
    display: flex;
    align-items: center;
    padding: 8px;

    .mobile {
      font-size: 14px;
      font-weight: 500;
      width: 64%;
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
      max-height: 40px;
      margin: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .progress {
      margin-right: 8px;
      padding: 0 12px;
      color: #222222;
      background-color: rgba(46, 103, 254, 0.01);
    }

    .done {
      margin-right: 8px;
      padding: 0 12px;
      color: #ffffff;
      background-color: rgba(255, 234, 165, 0.5);
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
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
  }
}
</style>
