<template>
  <div class="q1 fixed-no-scroll">
    <div class="q1-background" :style="questionBackground"></div>
    <h1 class="q1-title">{{ questionText }}</h1>
    <section class="q1-section">
      <div class="q1-section-choices">
        <div
          ref="q"
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :class="{ 'selected-q1': selected === index }"
          :style="`background-image:url(${answer.image})`"
        >
          <div
            @touchstart.prevent="choiceTouchMove(index)"
            @touchmove.prevent="choiceTouchMove(index)"
            @touchend.prevent="choiceTouchEnd(answer.id)"
            @mouseenter.prevent="choiceTouchStart(index)"
            @mousemove.prevent="choiceTouchMove(index)"
            @mousedown="choiceTouchEnd(answer.id)"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import useSelectPattern from "../../assets/js/use-select-pattern";

export default {
  name: "fourtyk-q1",
  props: {
    currentQuestion: Object,
    questionBackground: Object,
    questionText: String,
    questionChoices: Array,
  },
  emits: ["updateParams"],
  setup(props, { emit }) {
    const questionId = props.currentQuestion.id;
    // * ref
    // * store

    // * hooks
    const { choiceTouchMove, choiceTouchEnd, choiceTouchStart, selected } =
      useSelectPattern(emit, questionId, 1500);
    //  * computed

    //  * lifecycle
    //  * methods
    //  * return
    return {
      choiceTouchMove,
      choiceTouchEnd,
      choiceTouchStart,
      selected,
    };
  },
};
</script>

<style lang="scss" scoped>
.q1 {
  // position: fixed;
  // top: 0;
  // left: 0;
  // height: 100%;
  // width: 100%;
  // overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  &-background {
    position: fixed;
    background-size: cover;
    height: 100%;
    width: 100%;
    z-index: -2;
  }
  &-title {
    // margin: 6rem 0;
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
  }
  &-section {
    position: relative;
    // height: 66rem;
    animation: fadeInUp 1s;
    height: 80%;
    width: 100%;
    padding-bottom: 4.5rem;
    box-sizing: border-box;
    @include flexCenter;
    &-choices {
      // @include absCenter;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        width: 28rem;
        // height: 6.5rem;
        height: 12%;
        background-size: 102% 108%;
        background-position: center;
        // background-size: cover;
        background-repeat: no-repeat;
        // margin-bottom: 4rem;
        position: relative;
        transition: all 1s ease-out;
        div {
          height: 60%;
          width: 50%;
          @include absCenter;
        }
      }
    }
  }
}
.selected-q1 {
  box-shadow: 0 0 0.5rem 0.5rem rgb(78, 137, 66);
}
</style>
