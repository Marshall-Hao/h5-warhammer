<template>
  <div class="q5">
    <!-- <div class="q5-title">{{ questionText }}</div> -->
    <new-scene
      :choicesList="questionChoices"
      :nowQuestion="currentQuestion"
    ></new-scene>
  </div>
</template>

<script>
import newScene from "../base/scene/newScene.vue";
import NewScene from "../base/scene/newScene.vue";

export default {
  name: "aos-q5",
  components: {
    newScene,
    NewScene,
  },
  props: {
    currentQuestion: Object,
    questionBackground: Object,
    questionText: String,
    questionChoices: Array,
  },
  setup(props) {
    // const logo = require("@/assets/khorne/source/Khorne.fbx");
    const questionId = props.currentQuestion.id;
    const defaultScene = props.questionChoices[0].image;
    const defaultChoiceId = props.questionChoices[0].id;

    // * ref
    // * store

    //  * computed

    //  * lifecycle
    //  * methods

    //  * return
    return {};
  },
};
</script>

<style lang="scss" scoped>
.q5 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  background: url(../../assets/images/regular/aosq5bg.png);
  background-size: cover;
}
</style>
