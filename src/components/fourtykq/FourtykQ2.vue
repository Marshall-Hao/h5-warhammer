<template>
  <div class="q2">
    <div class="q2-background" :style="questionBackground"></div>
    <h1 class="q2-title">{{ questionText }}</h1>
    <section class="q2-section">
      <div class="q2-section-choices">
        <div
          ref="q"
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :class="{ 'selected-q': selected === index }"
          :style="`background-image:url(${answer.image})`"
          @touchstart.prevent="choiceTouchStart(index)"
          @touchmove.prevent="choiceTouchMove(index)"
          @touchend.prevent="choiceTouchEnd(index)"
        >
          <div class="q2-section-choices-mask"></div>
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
    // * ref
    // * store

    // * hooks
    const { choiceTouchMove, choiceTouchEnd, choiceTouchStart, selected } =
      useSelectPattern(emit);
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
@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}
.q2 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: scroll;
  text-align: center;
  &-background {
    position: absolute;
    background-size: cover;
    filter: url(#fractal2);
    height: 100%;
    width: 100%;
    z-index: -2;
  }
  &-title {
    margin: 6rem 0;
    font-size: 2.5rem;
    animation: flipInX 2s;
  }
  &-section {
    position: relative;
    height: 70rem;
    animation: zoomInLeft 1s;
    &-choices {
      @include absCenter;
      div {
        position: relative;
        width: 26rem;
        height: 14rem;
        background-size: cover;
        background-repeat: no-repeat;
        margin-bottom: 4rem;
        div {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          width: 26rem;
          height: 14rem;
          mask: url(https://i.imgur.com/AYJuRke.png);
          mask-size: 3000% 100%;
          @for $i from 1 through 4 {
            &:nth-child(#{$i}) {
              animation: maskMove 3s steps(29) infinite;
              animation-delay: 1s;
            }
          }
          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: 0.8;
            border-radius: 2rem;
            background-image: url(https://www.fauxhammer.com/wp-content/uploads/2020/05/Warhammer-40k-9th-Edition-Leaked-Featured-1.jpg);
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
      }
    }
  }
}
.selected-q {
  animation: fadeIn 2s ease-in-out infinite backwards,
    jello 2s ease-in-out infinite backwards;
}
@keyframes maskMove {
  0% {
    mask-position: 100% 0;
  }
  50% {
    mask-position: 0 0;
  }
  100% {
    mask-position: 100% 0;
  }
}
</style>
