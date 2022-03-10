<template>
  <div class="q5">
    <div class="q5-title">{{ questionText }}</div>
    <scene
      :scene="scene"
      :logo="logo"
      :scale="{ x: 0.5, y: 0.5, z: 0.5 }"
    ></scene>
    <div class="q5-confirm" @touchstart.prevent="next" @mousedown="next">
      confirm
    </div>
    <ul class="q5-select">
      <li
        v-for="(answer, index) in questionChoices"
        :key="answer"
        :class="{ 'select-q': selected === index }"
        @touchstart.prevent="changeScene(answer, index)"
        @mousedown="changeScene(answer, index)"
      >
        {{ index + 1 }}
      </li>
    </ul>
  </div>
</template>

<script>
import use3DView from "../../assets/js/use-3dview-pattern";
import Scene from "../base/scene/ Scene.vue";

export default {
  name: "aos-q5",
  components: {
    Scene,
  },
  props: {
    currentQuestion: Object,
    questionBackground: Object,
    questionText: String,
    questionChoices: Array,
  },
  setup(props) {
    const logo = require("@/assets/khorne/source/Khorne.fbx");
    const questionId = props.currentQuestion.id;
    const defaultScene = props.questionChoices[0].image;
    // * ref
    // * store

    //  * computed

    //  * lifecycle
    //  * methods
    const { changeScene, next, scene, selected } = use3DView(
      questionId,
      defaultScene
    );
    //  * return
    return {
      changeScene,
      next,
      scene,
      logo,
      selected,
    };
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
  &-title {
    @include absXCenter;
    font-size: 2rem;
    width: 100%;
    line-height: 3rem;
    top: 3rem;
  }
  &-confirm {
    @include absXCenter;
    bottom: 10rem;
    font-size: 4rem;
  }
  &-select {
    @include absXCenter;
    bottom: 3rem;
    display: flex;
    justify-content: space-between;
    width: 20rem;
    font-size: 3rem;
  }
}
.select-q {
  color: $color-text-py;
  transition: all 0.3s;
}
</style>
