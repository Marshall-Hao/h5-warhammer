<template>
  <div class="q7" :style="questionBackground">
    <h1 class="q7-title">{{ questionText }}</h1>
    <div class="q7-section">
      <div
        class="q7-section-option"
        v-for="answer in questionChoices"
        :key="answer"
      >
        <video-box
          :posterUrl="answer.image"
          :duration="4"
          starColor="#BC3F2F"
          lineColor="#65798b"
        ></video-box>
      </div>
    </div>
    <div class="q7-progress">
      <div class="q7-progress-top" ref="swipeOne">
        <div
          class="q7-progress-top-mask"
          :style="`background: ${maskValue};transition:all ${duration};`"
        ></div>
      </div>
      <div
        class="q7-progress-container"
        :style="iconTransform"
        @touchstart.prevent="onMiddleTouchStart"
        @touchmove.prevent="onMiddleTouchMove"
        @touchend.prevent="onMiddleTouchEnd"
        @mouseenter.prevent="onMiddleTouchStart"
        @mousemove.prevent="onMiddleTouchMove"
        @mouseleave="onMiddleTouchEnd"
      >
        <div class="q7-progress-eagle">
          <svg-icon :name="3" fill="#fff" :duration="animation"></svg-icon>
        </div>
      </div>
      <div class="q7-progress-bottom" ref="swipeTwo">
        <div
          class="q7-progress-bottom-mask"
          :style="`background: ${greyMask};transition:all ${duration};`"
        ></div>
      </div>
      <p class="q7-progress-instruction">
        {{ currentQuestion.instruction }}
      </p>
    </div>
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
  </div>
</template>

<script>
import SvgIcon from "../base/svgIcon/SvgIcon";
import VideoBox from "../base/video-box/VideoBox";
import useMiddleInteraction from "../../assets/js/use-middle-interaction";
import { computed, onMounted, ref } from "vue";

export default {
  name: "fourtyk-q7",
  components: {
    SvgIcon,
    VideoBox,
  },
  props: {
    currentQuestion: Object,
    questionBackground: Object,
    questionText: String,
    questionChoices: Array,
  },
  emits: ["updateParams"],
  setup(props) {
    const animation = {
      animation: "mainlogo 0.8s infinite alternate",
    };

    const turbulence = ref(null);
    let frames = 1;
    let rad = Math.PI / 180;
    let bf, bfx, bfy;

    // *props
    const questionId = props.currentQuestion.id;
    const choices = props.questionChoices;
    // * ref
    // * store

    //  * computed
    const maskValue = computed(() => {
      return `linear-gradient(
          0,
          rgba(229, 23, 49, 1),
          rgba(229, 23, 49, 0.9) ${maskTransform.redOffset}%,
          transparent ${maskTransform.transparentOffsetY}%
        );`;
    });
    const greyMask = computed(() => {
      return `linear-gradient(
           180deg,
          rgb(222, 210, 233),
          rgba(222, 210, 233, 0.9) ${maskTransform.greyOffset}%,
          transparent ${maskTransform.transparentOffsetYGrey}%
        );`;
    });
    const duration = computed(() => {
      return `${maskTransform.duration}ms`;
    });
    // * hooks
    const {
      swipeOne,
      swipeTwo,
      onMiddleTouchStart,
      onMiddleTouchMove,
      onMiddleTouchEnd,
      iconTransform,
      maskTransform,
    } = useMiddleInteraction("v", questionId, choices);
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
      animation,
      swipeOne,
      swipeTwo,
      onMiddleTouchStart,
      onMiddleTouchMove,
      onMiddleTouchEnd,
      iconTransform,
      turbulence,
      maskTransform,
      maskValue,
      greyMask,
      duration,
    };
  },
};
</script>

<style lang="scss" scoped>
.q7 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  background-size: cover;
  &-title {
    margin-top: 4.5rem;
    font-size: 2.5rem;
    animation: pulse 3s infinite ease;
  }
  &-section {
    margin-top: 5rem;
    @include absXCenter;
    &-option {
      width: 23rem;
      height: 28rem;
      &:not(:last-child) {
        margin-bottom: 13rem;
        animation: fadeInDown 1s ease;
      }
      &:last-child {
        animation: fadeInUp 1s ease;
      }
    }
  }
  &-progress {
    height: 67.8rem;
    width: 22rem;
    @include absXCenter;
    top: 12.6rem;
    &-top {
      position: absolute;
      top: 1rem;
      width: 100%;
      height: 27rem;
      overflow: hidden;
      &-mask {
        height: 100%;
        width: 120%;

        bottom: -0.9rem;
        @include absXCenter;
        filter: url(#smoke);
      }
    }
    &-container {
      @include absCenter;
    }
    &-eagle {
      width: 16rem;
      height: 7.41rem;
      @include absCenter;
    }
    &-bottom {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 27rem;
      overflow: hidden;
      &-mask {
        height: 100%;
        width: 130%;
        transform: scaleX(1.3);
        @include absXCenter;
        top: -0.9rem;
        filter: url(#smoke);
      }
    }
    &-instruction {
      position: absolute;
      left: 23%;
      top: 57%;
      animation: shakeY 10s infinite ease;
    }
  }
}
</style>
