<template>
  <v-dialog v-model="props.dialog" width="90%" max-width="800px">
    <v-form @submit.prevent="submit">
      <v-card class="rounded-lg" width="100%" :class="$style.popup">
        <div :class="$style.top">
          <p :class="$vuetify.display.mobile ? $style.mobile : $style.else">
            VITO 개선 아이디어를 제안해주세요.
          </p>
          <v-spacer></v-spacer>
          <v-btn icon :ripple="false" flat @click="$emit('close')">
            <v-img :src="btnClose" width="24px" height="24px" alt="닫기버튼" />
          </v-btn>
        </div>

        <v-divider></v-divider>
        <div :class="$style.body">
          <textarea
            v-model="content"
            rows="10"
            :class="$style.content"
            placeholder="여기에 입력해주세요."
          ></textarea>
        </div>

        <v-divider></v-divider>

        <v-card-actions>
          <v-card-text :class="$style.bottom">
            민감한 개인정보는 기입하지 마시고, 보내주신 내용은 서비스 개선에
            참조하는 것 외에는 일체 사용되지 않아요.
          </v-card-text>
          <v-spacer></v-spacer>
          <v-btn
            type="submit"
            :class="$style.submit"
            :disabled="content.length < 4"
            >보내기</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emits = defineEmits();
const content = ref("");
const props = defineProps({
  dialog: {
    type: Boolean,
    required: true,
    default: false,
  },
});
const btnClose = new URL("@/assets/images/btn_close.png", import.meta.url).href;
const submit = () => {
  console.log(content.value);
  content.value = "";
  emits("close");
};
</script>

<style module lang="scss" scoped>
.popup {
  .top {
    display: flex;
    align-items: center;
    padding: 18px 24px;

    .mobile {
      font-size: 18px;
      font-weight: 500;
      width: 64%;
      max-height: 60px;
      margin: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .else {
      font-size: 18px;
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
  }

  .body {
    background-color: #f5f8fd;
    padding: 24px;

    .content {
      width: 100%;
      height: 100%;
      max-height: 300px;
    }
  }
  .bottom {
    font-size: 12px;
    color: #777777;
    width: 50%;
  }
  .submit {
    padding: 0 28px;
    height: 40px;
    font-weight: 600;
    line-height: 20px;
    border-radius: 20px;
    background-color: #2e67fe;
    color: #ffffff;
    margin-right: 18px;
  }
}
</style>
