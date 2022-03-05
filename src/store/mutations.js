const mutations = {
  setAos(state, list) {
    state.aosQuestions = list;
  },
  set40K(state, list) {
    state.fourtykQuestions = list;
  },
  setPageKey(state) {
    state.pageKey = Date.now();
  },
};

export default mutations;
