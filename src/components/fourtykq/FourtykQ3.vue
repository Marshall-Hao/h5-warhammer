<template>
  <div class="q3">
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
          scale="10"
        >
          <animate
            id="scale1"
            attributeName="scale"
            attributeType="XML"
            from="50"
            to="5"
            dur="2s"
            fill="freeze"
            begin="0; scale3.end"
          />
          <animate
            id="scale2"
            attributeName="scale"
            attributeType="XML"
            from="5"
            to="0"
            dur="2.5s"
            fill="freeze"
            begin="scale1.end"
          />
          <animate
            id="scale3"
            attributeName="scale"
            attributeType="XML"
            from="0"
            to="50"
            dur="2s"
            fill="freeze"
            begin="scale2.end"
          />
        </feDisplacementMap>
      </filter>
    </svg>
    <div class="q3-background" :style="questionBackground"></div>
    <div class="q3-section">
      <div class="q3-section-video">
        <video-box
          :lineColor="`rgb(67,80,102)`"
          :starColor="`#BC3F2F`"
          :duration="`5`"
          :style="{ transform: 'scale(1.115,1.19)' }"
          :posterUrl="currentQuestion.instruction_image"
        ></video-box>
      </div>
      <h1 class="q3-section-title">{{ questionText }}</h1>
      <div class="q3-section-choices">
        <div
          v-for="(answer, index) in questionChoices"
          :key="answer"
          class="q3-section-choice"
          :class="{ 'selected-q': selected === index }"
          @touchstart.prevent="choiceTouchStart(index)"
          @touchmove.prevent="choiceTouchMove(index)"
          @touchend.prevent="choiceTouchEnd(answer.id)"
        >
          <svg-icon :name="index + 1"></svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoBox from "../base/video-box/VideoBox";
import SvgIcon from "../base/svgIcon/SvgIcon";
import useSelectPattern from "../../assets/js/use-select-pattern";

export default {
  name: "fourtyk-q3",
  components: {
    VideoBox,
    SvgIcon,
  },
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

    //  * computed
    // *hooks
    const { choiceTouchMove, choiceTouchEnd, choiceTouchStart, selected } =
      useSelectPattern(emit, questionId);
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
.q3 {
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
    filter: url(#fractal2);
  }
  &-section {
    width: 37rem;
    margin-top: 1rem;
    position: relative;
    @include absXCenter;
    text-align: center;
    &-video {
      width: 37rem;
      height: auto;
      margin-top: 3.5rem;
      animation: fadeIn 1s ease-in;
    }
    &-title {
      margin-top: 2.8rem;
      line-height: 4rem;
      font-size: 3rem;
      animation: backInLeft 1s ease-in, pulse 3s ease-in-out infinite;
    }
    &-choices {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 7rem;
      animation: fadeInUp 1s;
    }
    &-choice {
      @include absCenter;
      position: relative;
      width: 10rem;
      margin-bottom: 4rem;
      height: 10rem;
      border-radius: 50%;
      border: 0.3rem solid black;
      background-color: $color-text-pr;
      box-shadow: 0 0 1rem 0.1rem white;
      animation: fadeIn 1s ease-in;
    }
  }
}
.selected-q {
  animation: flash 1s infinite;
}
</style>
