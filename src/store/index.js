import { createStore } from "vuex";

export default createStore({
  state: {
    cards: {
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
    },
  },
  getters: {
    cards: (state) => state.cards,
  },
  mutations: {
    changeCard: (state, { id, newCard }) =>
      (state.cards.progress[id] = newCard),
  },
  actions: {
    setCard(context, card) {
      context.commit("changeCard", card);
    },
  },
});
