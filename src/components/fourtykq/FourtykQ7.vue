<template>
  <div class="q7 fixed-no-scroll" :style="questionBackground">
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
          starColor="rgb(222, 210, 233,0.8)"
          lineColor="#65798b"
        >
        </video-box>
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
          <svg-icon :name="3" fill="#fff" :duration="{}"></svg-icon>
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
          rgb(222, 210, 233,0.8),
          rgba(222, 210, 233, 0.6) ${maskTransform.redOffset}%,
          transparent ${maskTransform.transparentOffsetY}%
        );`;
    });
    const greyMask = computed(() => {
      return `linear-gradient(
           180deg,
          rgb(222, 210, 233,0.8),
          rgba(222, 210, 233, 0.6) ${maskTransform.greyOffset}%,
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
  // position: fixed;
  // top: 0;
  // left: 0;
  // height: 100%;
  // width: 100%;
  // overflow-y: scroll;

  overflow-x: hidden;
  text-align: center;
  background-size: cover;
  &-title {
    // margin-top: 4.5rem;
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
  }
  &-section {
    // margin-top: 5rem;
    @include absXCenter;
    width: 100%;
    height: 100%;
    &-option {
      width: 73.3%;
      height: 29.1%;
      position: relative;
      &:not(:last-child) {
        margin: 0 auto 13rem;
        animation: fadeInDown 1s ease;
      }
      &:last-child {
        margin: 0 auto;
        animation: fadeInUp 1s ease;
      }
    }
  }

  &-progress {
    height: 100%;
    width: 73.3%;
    @include absXCenter;
    &-top {
      position: absolute;
      top: -0.5rem;
      width: 100%;
      height: 29.1%;
      overflow: hidden;
      &-mask {
        height: 100%;
        width: 120%;

        bottom: -0.9rem;
        @include absXCenter;
        // filter: url(#smoke);
      }
    }
    &-container {
      @include absXCenter;
      top: 33%;
    }
    &-eagle {
      width: 16rem;
      height: 7.41rem;

      @include absXCenter;
    }
    &-bottom {
      position: absolute;

      bottom: 25.6%;
      width: 100%;
      height: 29.1%;
      overflow: hidden;
      // background: red;
      &-mask {
        height: 100%;
        width: 130%;
        transform: scaleX(1.3);
        @include absXCenter;
        top: -0.9rem;
        // filter: url(#smoke);
      }
    }

    &-instruction {
      position: absolute;
      left: 26.5%;
      top: 43%;
      animation: jump 2s infinite ease;
    }
  }

  @media only screen and (min-width: 412px) and (max-width: 414px) {
    .q7-progress-bottom {
      bottom: 27%;
    }
  }

  @media only screen and (min-width: 360px) and (max-width: 360px) {
    .q7-progress-bottom {
      bottom: 26.9%;
    }
  }
}

@keyframes jump {
  0% {
    transform: translateY(-0.3rem);
  }
  50% {
    transform: translateY(0.3rem);
  }
  100% {
    transform: translateY(-0.3rem);
  }
}
</style>
