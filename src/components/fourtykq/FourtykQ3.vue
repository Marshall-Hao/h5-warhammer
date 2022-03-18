<template>
  <div class="q3 fixed-no-scroll">
    <div class="q3-background" :style="questionBackground"></div>
    <div class="q3-section">
      <!-- <div class="q3-section-video">
        <video-box
          :lineColor="`rgb(67,80,102)`"
          :starColor="`#BC3F2F`"
          :duration="`5`"
          :style="{ transform: 'scale(1.115,1.19)' }"
          :posterUrl="currentQuestion.instruction_image"
        ></video-box>
      </div> -->
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
          @mouseenter.prevent="choiceTouchStart(index)"
          @mousemove.prevent="choiceTouchMove(index)"
          @mousedown="choiceTouchEnd(answer.id)"
        >
          <svg-icon
            :name="index + 1"
            :duration="{}"
            v-if="index !== 2"
          ></svg-icon>
          <svg-icon
            :name="index + 1"
            :duration="{}"
            icon="icon-special"
            v-else
          ></svg-icon>
        </div>
      </div>
    </div>
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
  &-section {
    width: 37rem;
    height: 100%;
    padding: 2.25rem 4rem;
    // margin-top: 1rem;
    position: relative;
    @include absXCenter;
    text-align: center;
    &-video {
      width: 37rem;
      height: 26.4rem;
      margin-top: 3.5rem;
      // animation: fadeIn 1s ease-in;
    }
    &-title {
      // margin-top: 2.8rem;
      height: 25%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 4rem;
      font-size: 3rem;
      animation: backInLeft 1s ease-in;
    }
    &-choices {
      height: 75%;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 4rem;
      row-gap: 1.25rem;
      // margin-top: 3rem;
      // padding: 2rem 0;
      padding-bottom: 3rem;
      animation: fadeInUp 1s;
    }
    &-choice {
      // @include absCenter;
      position: relative;
      justify-self: center;
      align-self: center;
      width: 12rem;
      height: 12rem;
      // margin: 0 auto 4rem;
      border-radius: 50%;
      border: 0.3rem solid black;
      background-color: $color-text-pr;
      box-shadow: 0 0 1rem 0.1rem white;
      animation: fadeIn 1s ease-in, logo4 10s infinite ease-in-out forwards;
    }
  }
}
.selected-q {
  animation: flash 1s infinite;
}
</style>
