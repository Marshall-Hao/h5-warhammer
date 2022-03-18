<template>
  <div class="q5">
    <div class="q5-title">{{ questionText }}</div>
    <scene :scene="scene"></scene>
    <div class="q5-rotate"></div>
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
import Scene from "../base/scene/ Scene.vue";
import use3DView from "../../assets/js/use-3dview-pattern";

export default {
  name: "fourtyk-q5",
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
    const questionId = props.currentQuestion.id;
    const defaultScene = props.questionChoices[0].image;
    const defaultChoiceId = props.questionChoices[0].id;
    // * ref
    // * store

    //  * computed

    //  * lifecycle
    //  * methods
    const { changeScene, next, scene, selected } = use3DView(
      questionId,
      defaultScene,
      defaultChoiceId
    );
    //  * return
    return {
      changeScene,
      next,
      scene,
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
  &-rotate {
    @include absCenter;
    height: 10rem;
    width: 10rem;
    background-image: url(../../assets/images/regular/rotate.png);
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.6;
  }
  &-confirm {
    @include absXCenter;
    bottom: 13rem;
    font-size: 2rem;
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
