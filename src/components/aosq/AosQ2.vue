<template>
  <div class="q2" :style="questionBackground">
    <svg width="0" height="0">
      <filter id="smoke">
        <feTurbulence
          ref="turbulence"
          id="turbulence"
          type="fractalNoise"
          baseFrequency=".03"
          numOctaves="20"
        />
        <feDisplacementMap in="SourceGraphic" scale="30" />
      </filter>
    </svg>
    <h1 class="q2-title">
      {{ questionText }}
    </h1>
    <div
      class="q2-banner"
      :style="{
        background: `url(${currentQuestion.instruction_image})`,
        backgroundSize: 'cover',
      }"
    ></div>
    <div class="q2-choices">
      <div
        ref="q"
        v-for="(answer, index) in questionChoices"
        :key="answer"
        :class="{ 'selected-q': selected === index }"
        :style="{
          background: `url(${answer.image})`,
          backgroundSize: 'cover',
        }"
        @touchstart.prevent="choiceTouchStart(index)"
        @touchmove.prevent="choiceTouchMove(index)"
        @touchend.prevent="choiceTouchEnd(answer.id)"
      ></div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import useSelectPattern from "../../assets/js/use-select-pattern";

export default {
  name: "aos-q2",
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
    const turbulence = ref(null);
    let frames = 1;
    let rad = Math.PI / 180;
    let bf, bfx, bfy;
    // * store

    // * hooks
    const { choiceTouchMove, choiceTouchEnd, choiceTouchStart, selected } =
      useSelectPattern(emit, questionId);
    //  * computed

    //  * lifecycle
    onMounted(() => {
      window.requestAnimationFrame(freqAnimation);
    });
    //  * methods
    function freqAnimation() {
      frames += 0.35;

      bfx = 0.035;
      bfy = 0.015;

      bfx += 0.01 * Math.cos(frames * rad);
      bfy += 0.009 * Math.sin(frames * rad);
      bf = bfx.toString() + " " + bfy.toString();
      turbulence.value.setAttributeNS(null, "baseFrequency", bf);
      window.requestAnimationFrame(freqAnimation);
    }
    //  * return
    return {
      turbulence,
      choiceTouchMove,
      choiceTouchEnd,
      choiceTouchStart,
      selected,
    };
  },
};
</script>

<style lang="scss" scoped>
.q2 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  &-banner {
    width: 100%;
    height: 20.5rem;
    animation: flipInY 1.5s;
    position: relative;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: -0.8rem;
      right: 0;
      bottom: 0;
      width: 120%;
      background: linear-gradient(
        180deg,
        rgba(35, 46, 254, 1),
        rgba(192, 247, 254, 0.8) 20%,
        transparent 35%
      );
      filter: url(#smoke);
    }
  }
  &-choices {
    @include absXCenter;
    margin-top: 4rem;
    animation: zoomInUp 1s ease-in;
    div {
      width: 23.3rem;
      height: 9rem;
      margin-bottom: 1.5rem;
    }
  }
}
.selected-q {
  animation: heartBeat 2s infinite ease-out;
}
</style>
