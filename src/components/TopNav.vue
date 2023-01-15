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
import { computed, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import SubTitle from "@/components/SubTitle.vue";
import Card from "@/components/Card.vue";

const tab = ref(null);
const isSnackbarOpen = ref(false);
const store = useStore();
const voted = ({ id, isVoted }) => {
  const newCard = cards.value.progress[id];
  if (isVoted.value) {
    newCard.voteCount++;
    isSnackbarOpen.value = true;
  } else {
    newCard.voteCount--;
  }
  store.dispatch("setCard", { id, newCard });
};

const cards = reactive(computed(() => store.getters.cards));
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
