import { computed, onBeforeUpdate, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import storage from "good-storage";
// todo: fix the page reload problem ,hint: https://blog.csdn.net/qq_16772725/article/details/80467492
export default function questionPattern() {
  //  * route
  const route = useRoute();
  const isFourtyK = route.path.includes("40k");
  // *ref
  // * store
  const store = useStore();
  const questionId = ref(route.params.id);
  const realQuestionId = questionId.value;
  // * storage
  // * computed
  const questionCache = computed(() => {
    return isFourtyK
      ? storage.session.get(`__40kquestion${questionId.value}__`)
      : storage.session.get(`__aosquestion${questionId.value}__`);
  });
  console.log(questionCache.value);
  const currentQuestion = computed(() => {
    if (
      questionCache.value &&
      questionCache.value.page_template_number === Number(questionId.value)
    ) {
      return questionCache.value;
    } else {
      let q;
      if (isFourtyK) {
        q = store.getters.currentFourtyKQuestion.find((q) => {
          return q.page_template_number === Number(questionId.value);
        });
      } else {
        q = store.getters.currentAosQuestion.find((q) => {
          return q.page_template_number === Number(questionId.value);
        });
      }
      return q;
    }
  });
  const questionBackground = computed(() => {
    const backgroundImage = `url(${
      currentQuestion.value && currentQuestion.value.bg_image
    })`;
    return { backgroundImage };
  });
  // * watch
  // *lifecycle
  onBeforeUpdate(() => {
    updateParams(route.params.id);
  });

  // *methods
  function updateParams(id) {
    questionId.value = id;
  }
  // * return
  return {
    questionId,
    questionBackground,
    currentQuestion,
    updateParams,
    store,
  };
}
