<template>
  <div class="q2 fixed-no-scroll">
    <div class="q2-background" :style="questionBackground"></div>
    <h1 class="q2-title">{{ questionText }}</h1>
    <section class="q2-section">
      <div class="q2-section-choices">
        <div
          ref="q"
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :style="{
            backgroundImage: `url(${answer.image})`,
          }"
          @touchstart.prevent="choiceTouchStart(index)"
          @touchmove.prevent="choiceTouchMove(index)"
          @touchend.prevent="choiceTouchEnd(answer.id)"
          @mouseenter.prevent="choiceTouchStart(index)"
          @mousemove.prevent="choiceTouchMove(index)"
          @mousedown="choiceTouchEnd(answer.id)"
        >
          <div
            class="q2-section-choices-mask"
            :class="{ 'selected-q': selected === index }"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import useSelectPattern from "../../assets/js/use-select-pattern";

export default {
  name: "fourtyk-q2",
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
      useSelectPattern(emit, questionId);
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

<style lang="scss">
.q2 {
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
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // margin: 6rem 0;
    font-size: 2.5rem;
    // filter: url(#fractal);
  }
  &-section {
    position: relative;
    // height: 70rem;
    animation: pulse 2s 1s infinite ease-in-out;
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
        position: relative;
        width: 26rem;
        // height: 14rem;
        height: 22%;
        // background-size: cover;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        // margin-bottom: 4rem;
        animation: maskmove 2s 1s steps(29) forwards;
        div {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2;
          // width: 26rem;
          // height: 14rem;
          height: 100%;
          mask: url(../../assets/images/regular/maskdetail.png);
          mask-position: 100% 0;
          mask-size: 3000% 100%;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: 0.5;
            border-radius: 2rem;
            background-image: url(../../assets/images/regular/warhammerMask.png);
            background-repeat: no-repeat;
            // background-size: contain;
            // background-position: center;
            background-size: cover;
          }
        }
      }
    }
  }
}

.selected-q {
  animation: fadeOut 1s;
}
@keyframes maskmove {
  0% {
    mask-position: 100% 0;
  }

  100% {
    mask-position: 0 0;
  }
}
</style>
