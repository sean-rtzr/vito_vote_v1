<template>
  <v-snackbar
    v-model="isSnackbarOpen"
    :timeout="1000"
    color="blue-darken-3"
    offset="32"
    position="relative"
    elevation="24"
    location="top"
  >
    <p>소중한 의견을 VITO 팀에 전달했어요!</p>
  </v-snackbar>

  <v-card color="transparent" flat>
    <v-tabs
      v-model="tab"
      slider-color="blue"
      color="blue"
      :class="$style.wrapper"
      :ripple="false"
    >
      <v-tab value="one" class="font-weight-bold" :ripple="false"
        >투표중({{ cards.progress.length }})</v-tab
      >
      <v-tab value="two" class="font-weight-bold" :ripple="false"
        >개발중({{ cards.dev.length }})</v-tab
      >
      <v-tab value="three" class="font-weight-bold" :ripple="false"
        >배포됨({{ cards.done.length }})</v-tab
      >
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item
          value="one"
          :class="$vuetify.display.mobile ? $style.mobile : $style.else"
        >
          <SubTitle title="원하는 기능을 선택해주세요" />
          <Card
            v-for="card in cards.progress"
            :key="card.id"
            :id="card.id"
            :title="card.title"
            :description="card.description"
            :voteCount="card.voteCount"
            :status="card.status"
            :label="card.label"
            @voted="voted"
          />
        </v-window-item>
        <v-window-item
          value="two"
          :class="$vuetify.display.mobile ? $style.mobile : $style.else"
        >
          <SubTitle title="열심히 개발하고 있어요" />
          <Card
            v-for="card in cards.dev"
            :key="card.id"
            :id="card.id"
            :title="card.title"
            :description="card.description"
            :voteCount="card.voteCount"
            :status="card.status"
            :label="card.label"
            @voted="voted"
          />
        </v-window-item>

        <v-window-item
          value="three"
          :class="$vuetify.display.mobile ? $style.mobile : $style.else"
        >
          <SubTitle title="소중한 의견 반영했어요" />
          <Card
            v-for="card in cards.done"
            :key="card.id"
            :id="card.id"
            :title="card.title"
            :description="card.description"
            :voteCount="card.voteCount"
            :status="card.status"
            :label="card.label"
            @voted="voted"
          />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { reactive, onMounted, ref } from "vue";
import SubTitle from "@/components/SubTitle.vue";
import Card from "@/components/Card.vue";

const tab = ref(null);
const isSnackbarOpen = ref(false);
const cards = reactive({
  progress: [
    {
      id: 0,
      title: "클라우드 파일을 삭제할 수 있게 해주세요.",
      description:
        "불필요한 녹음파일들까지 클라우드에 저장되어 용량을 차지하고 있어요. 내가 원하는 파일들만 저장될 수 있게 해주세요.",
      status: "progress",
      label: "투표중",
      voteCount: 3241,
    },
    {
      id: 1,
      title: "내 목소리를 내가 듣는게 어색해요.",
      description:
        "다시듣기를 할 때 마다 매번 내 목소리를 듣는게 어색해서 스킵하게 되요. 내 목소리도 내가 듣기 좋은 목소리로 바꿔주세요.",
      status: "progress",
      label: "투표중",
      voteCount: 571,
    },

    {
      id: 2,
      title: "대화방에서 글자 크기를 조절할 수 있게 해주세요.",
      description:
        "핸드폰이 작아서 문자변환된 대화내용 글자가 너무 작아보이고 내용을 읽는데 피로함이 느껴져요.",
      status: "progress",
      label: "투표중",
      voteCount: 211,
    },
    {
      id: 3,
      title: "비토에서 문자도 보내면 좋겠어요.",
      description:
        "대화내용을 보면서 바로 전화를 하거나 문자를 보내고 싶은데 프로필 화면에서 문자보내기도 가능하면 좋겠어요.",
      status: "progress",
      label: "투표중",
      voteCount: 4216,
    },
    {
      id: 4,
      title: "대화방에서 글자 크기를 조절할 수 있게 해주세요.",
      description:
        "핸드폰이 작아서 문자변환된 대화내용 글자가 너무 작아보이고 내용을 읽는데 피로함이 느껴져요.",
      status: "progress",
      label: "투표중",
      voteCount: 46,
    },
    {
      id: 5,
      title: "내용을 자동으로 요약해주세요.",
      description:
        "긴 내용을 다 읽어보기전에 전체 내용을 간단히 요약해주거나 중요한 단어는 태그를 생성해주면 편할 것 같아요.",
      status: "progress",
      label: "투표중",
      voteCount: 312,
    },
    {
      id: 6,
      title: "폴더기능이 있으면 좋겠어요.",
      description:
        "내가 원하는 문자변환 기록들은 폴더별로 따로 저장하고 싶어요.",
      status: "progress",
      label: "투표중",
      voteCount: 12,
    },
    {
      id: 7,
      title: "2시간 이상 통화녹음도 문자변환되게 해주세요.",
      description:
        "가끔 긴 통화를 할 때 문자변환 제한이 걸려 아쉬울 때가 있어요. 제한시간을 더 늘려주세요.",
      status: "progress",
      label: "투표중",
      voteCount: 122,
    },
  ],
  dev: [
    {
      id: 0,
      title: "멀티계정 로그인을 지원해주세요.",
      description:
        "업무상 2개 이상 핸드폰을 사용하는데 멀티계정을 지원해주면 편리할 것 같습니다.",
      status: "dev",
      label: "개발중",
      voteCount: 7532,
    },
  ],
  done: [
    {
      id: 0,
      title: "원하는 녹음파일만 업로드하고 싶어요.",
      description:
        "모든 전화통화 녹음파일이 올라가서 원치않는 내용들까지 목록에서 보여서 찾기 힘들어요.",
      status: "done",
      label: "완료",
      voteCount: 13202,
    },
  ],
});
const voted = ({ id, isVoted }) => {
  const newCard = cards.progress[id];
  if (isVoted.value) {
    newCard.voteCount++;
    isSnackbarOpen.value = true;
  } else {
    newCard.voteCount--;
  }
  cards.progress[id] = newCard;
  // store.dispatch("setCard", { id, newCard });
};

onMounted(() => {});
</script>

<style module lang="scss" scoped>
.wrapper {
  padding: 0 0 0 24px;
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
