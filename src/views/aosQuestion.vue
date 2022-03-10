<template>
  <div>
    <component
      :is="`aos-q${questionId}`"
      :currentQuestion="currentQuestion"
      :questionBackground="questionBackground"
      :questionText="currentQuestion && currentQuestion.text"
      :questionChoices="currentQuestion && currentQuestion.choices"
      @updateParams="updateParams"
    ></component>
  </div>
</template>

<script>
import AosQ1 from "../components/aosq/AosQ1";
import AosQ2 from "../components/aosq/AosQ2";
import AosQ3 from "../components/aosq/AosQ3";
import AosQ4 from "../components/aosq/AosQ4";
import AosQ5 from "../components/aosq/AosQ5";
import AosQ6 from "../components/aosq/AosQ6";
import AosQ7 from "../components/aosq/AosQ7";
import questionPattern from "../assets/js/use-questions-pattern";

export default {
  name: "aos-question",
  components: {
    AosQ1,
    AosQ2,
    AosQ3,
    AosQ4,
    AosQ5,
    AosQ6,
    AosQ7,
  },
  setup() {
    const {
      questionId,
      questionBackground,
      currentQuestion,
      updateParams,
      store,
    } = questionPattern();

    return {
      questionId,
      questionBackground,
      currentQuestion,
      updateParams,
      store,
    };
  },
};
</script>

<style scoped>
div {
  font-family: "jingdian";
}
</style>
