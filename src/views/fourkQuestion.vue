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
import FourtykQ1 from "../components/fourtykq/FourtykQ1";
import FourtykQ2 from "../components/fourtykq/FourtykQ2";
import FourtykQ3 from "../components/fourtykq/FourtykQ3";
import FourtykQ4 from "../components/fourtykq/FourtykQ4";
import FourtykQ5 from "../components/fourtykq/FourtykQ5";
import FourtykQ6 from "../components/fourtykq/FourtykQ6";
import FourtykQ7 from "../components/fourtykq/FourtykQ7";
import questionPattern from "../assets/js/use-questions-pattern";

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
