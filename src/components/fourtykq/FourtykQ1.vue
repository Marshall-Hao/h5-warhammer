<template>
  <div class="q1">
    <div class="q1-background" :style="questionBackground"></div>
    <h1 class="q1-title">{{ questionText }}</h1>
    <section class="q1-section">
      <div class="q1-section-choices">
        <div
          ref="q"
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :class="{ 'selected-q': selected === index }"
          :style="`background-image:url(${answer.image})`"
          @touchstart.prevent="choiceTouchStart(index)"
          @touchmove.prevent="choiceTouchMove(index)"
          @touchend.prevent="choiceTouchEnd(answer.id)"
        ></div>
      </div>
    </section>
    <svg width="0" height="0">
      <filter
        id="fractal2"
        filterUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.995"
          numOctaves="10"
          seed="1"
          result="img"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="img"
          xChannelSelector="R"
          yChannelSelector="G"
          scale="200"
        >
          <animate
            id="scale1"
            attributeName="scale"
            attributeType="XML"
            from="200"
            to="10"
            dur="2s"
            fill="freeze"
            begin="0; scale3.end"
          />
          <animate
            id="scale2"
            attributeName="scale"
            attributeType="XML"
            from="10"
            to="1"
            dur="2.5s"
            fill="freeze"
            begin="scale1.end"
          />
          <animate
            id="scale3"
            attributeName="scale"
            attributeType="XML"
            from="1"
            to="200"
            dur="2s"
            fill="freeze"
            begin="scale2.end"
          />
        </feDisplacementMap>
      </filter>
    </svg>
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

<style lang="scss" scoped>
.q1 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  &-background {
    position: fixed;
    background-size: cover;
    filter: url(#fractal2);
    height: 100%;
    width: 100%;
    z-index: -2;
  }
  &-title {
    margin: 6rem 0;
    font-size: 3rem;
    animation: fadeInDown 1s;
  }
  &-section {
    position: relative;
    height: 66rem;
    animation: fadeInUp 1s;
    &-choices {
      @include absCenter;
      div {
        width: 28rem;
        height: 6.5rem;
        background-size: cover;
        background-repeat: no-repeat;
        margin-bottom: 4rem;
      }
    }
  }
}
.selected-q {
  animation: fadeIn 2s ease-in-out infinite backwards,
    bounceIn 2s ease-in-out infinite backwards;
}
</style>
