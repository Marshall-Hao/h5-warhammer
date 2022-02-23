<template>
  <component
    :is="`fourtyk-q${questionId}`"
    :currentQuestion="currentQuestion"
    :questionBackground="questionBackground"
    :questionText="currentQuestion && currentQuestion.text"
    :questionChoices="currentQuestion && currentQuestion.choices"
    @updateParams="updateParams"
  ></component>
</template>

<script>
import { computed, onBeforeUpdate, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import FourtykQ1 from "../components/fourtykq/FourtykQ1";
import FourtykQ2 from "../components/fourtykq/FourtykQ2";
import FourtykQ3 from "../components/fourtykq/FourtykQ3";
import FourtykQ4 from "../components/fourtykq/FourtykQ4";
import FourtykQ5 from "../components/fourtykq/FourtykQ5";
import FourtykQ6 from "../components/fourtykq/FourtykQ6";
import FourtykQ7 from "../components/fourtykq/FourtykQ7";
import storage from "good-storage";
import { Q_KEY } from "../assets/js/constant";

export default {
  name: "40k-question",
  components: {
    FourtykQ1,
    FourtykQ2,
    FourtykQ3,
    FourtykQ4,
    FourtykQ5,
    FourtykQ6,
    FourtykQ7,
  },
  setup() {
    //  * route
    const route = useRoute();
    // *ref
    // * store
    const store = useStore();
    const questionId = ref(route.params.id);
    const realQuestionId = questionId.value;
    // * storage
    const questionCache = storage.session.get(
      `__40kquestion${realQuestionId}__`
    );
    // * computed
    const currentQuestion = computed(() => {
      if (
        questionCache &&
        questionCache.page_template_number === Number(questionId.value)
      ) {
        return questionCache;
      } else {
        const q = store.getters.currentFourtyKQuestion.find((q) => {
          return q.page_template_number === Number(questionId.value);
        });
        storage.session.set(`__40kquestion${questionId.value}__`, q);
        return q;
      }
    });

    const questionBackground = computed(() => {
      const backgroundImage = `url(${
        currentQuestion.value && currentQuestion.value.bg_image
      })`;
      return { backgroundImage };
    });
    function updateParams(id) {
      questionId.value = id;
    }
    // *lifecycle
    onBeforeUpdate(() => {
      questionId.value = route.params.id;
    });
    // *methods
    // * return
    return {
      questionId,
      questionBackground,
      currentQuestion,
      updateParams,
    };
  },
  // computed: {
  //   questionComp() {
  //     const app = this.questionName;
  //     return {
  //       app: () =>
  //         require(`../components/40kQ/FourtykQ${this.$route.params.id}.vue`)
  //           .default,
  //     };
  //   },
  // },
  // created() {
  //   this.loadComp();
  //   console.log(this.questionComp.app);
  // },
  // methods: {
  //   loadComp() {
  //     this.questionComp = {
  //       app: () =>
  //         import(`../components/fourtykq/FourtykQ${this.$route.params.id}`),
  //     };
  //   },
  // },
};
</script>
