<template>
  <div class="q6">
    <div class="q6-background" :style="questionBackground"></div>
    <div
      class="q6-icon"
      :style="{
        background: `url(${currentQuestion.selector_image})`,
        backgroundSize: `cover`,
      }"
    ></div>
    <h1 class="q6-title">{{ questionText }}</h1>
    <section class="q6-section">
      <div class="q6-section-choices">
        <div
          ref="q"
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :class="{ 'selected-q': selected === index }"
        >
          {{ answer.text }}
          <div
            @touchstart.prevent="choiceTouchStart(index)"
            @touchmove.prevent="choiceTouchMove(index)"
            @touchend.prevent="choiceTouchEnd(answer.id)"
            @mouseenter.prevent="choiceTouchStart(index)"
            @mousemove.prevent="choiceTouchMove(index)"
            @mousedown="choiceTouchEnd(answer.id)"
          ></div>
        </div>
      </div>
    </section>
    <svg width="0" height="0">
      <filter
        id="fractal"
        filterUnits="objectBoundingBox"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
      >
        <feTurbulence
          id="turbulence"
          type="fractalNoise"
          baseFrequency="0.032 0.02"
          numOctaves="1"
        >
          <animate
            id="wave1"
            attributeName="baseFrequency"
            attributeType="XML"
            from="0.032 0.02"
            to="0.022 0.01"
            dur="3.5s"
            fill="freeze"
            begin="0; wave2.end"
          />
          <animate
            id="wave2"
            attributeName="baseFrequency"
            attributeType="XML"
            from="0.022 0.01"
            to="0.032 0.02"
            dur="3.5s"
            fill="freeze"
            begin="wave1.end"
          />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
      </filter>
    </svg>
  </div>
</template>

<script>
import useSelectPattern from "../../assets/js/use-select-pattern";

export default {
  name: "aos-q6",
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
.q6 {
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

    height: 100%;
    width: 100%;
    z-index: -2;
  }
  &-icon {
    @include absXCenter;
    margin-top: 2rem;
    height: 10.9rem;
    width: 10rem;
    // filter: url(#fractal);
  }
  &-title {
    margin-top: 14rem;
    letter-spacing: 0.3rem;
    line-height: 3.2rem;
    padding: 0 1rem;
    color: #7d300b;
    font-size: 2.6rem;
    animation: fadeInDownBig 1s, shadowtext 5s infinite ease-out;
  }
  &-section {
    margin-top: 6rem;
    &-choices {
      display: flex;
      flex-direction: column;
      // padding: 0 3rem;
      animation: backInUp 1s ease-in;
      div {
        position: relative;

        font-size: 1.6rem;
        letter-spacing: 0.3rem;
        line-height: 1.5rem;
        margin: 0 auto 3rem;
        border-radius: 1rem;
        transition: 0.2s all;
        // width: 25.5rem;
        width: 70%;
        div {
          height: 60%;
          width: 50%;
          @include absCenter;
        }
      }
    }
  }
}
.selected-q {
  color: $color-text-py;
  box-shadow: 0;
  box-shadow: inset -7px -7px 12px transparent,
    inset 7px 7px 12px rgba(0, 0, 0, 0.4);
}

@keyframes shadowtext {
  0% {
    text-shadow: 1px 1px 1px #fff, -1px -1px 1px #000;
  }
  50% {
    text-shadow: 1px 1px 1px #000, -1px -1px 1px #fff;
  }
  100% {
    text-shadow: 1px 1px 1px #fff, -1px -1px 1px #000;
  }
}
</style>
