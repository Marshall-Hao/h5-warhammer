const mutations = {
  setAos(state, list) {
    state.aosQuestions = list;
  },
  set40K(state, list) {
    state.fourtykQuestions = list;
  },
  setCategory(state, faction) {
    state.category = faction;
  },
  togglePlay(state) {
    state.play = !state.play;
  },
  noPlay(state) {
    state.play = false;
  },
};

export default mutations;
