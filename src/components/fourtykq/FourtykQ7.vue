<template>
  <div class="q7 fixed-no-scroll" :style="questionBackground">
    <h1 class="q7-title">{{ questionText }}</h1>
    <div class="q7-section">
      <div
        class="q7-section-option"
        v-for="(answer, index) in questionChoices"
        :key="answer"
      >
        <div
          :style="{ backgroundImage: `url(${answer.image})` }"
          v-if="index === 0"
          class="top"
        >
          <div></div>
          <!-- <img :src="answer.image" crossOrigin="anonymous" alt="" class="top" /> -->
          <!-- <div
            :style="`background: ${maskValue};transition:all ${duration};`"
          ></div> -->
        </div>
        <div
          v-else
          :style="{ backgroundImage: `url(${answer.image})` }"
          class="bottom"
          crossOrigin="anonymous"
        >
          <div></div>
          <!-- <div
            :style="`background: ${greyMask};transition:all ${duration};`"
          ></div> -->
        </div>
      </div>
    </div>
    <div class="q7-progress">
      <div class="q7-progress-top" ref="swipeOne"></div>
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
          <p class="q7-progress-instruction">
            {{ currentQuestion.instruction }}
          </p>
        </div>
      </div>
      <div class="q7-progress-bottom" ref="swipeTwo"></div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "../base/svgIcon/SvgIcon";
import VideoBox from "../base/video-box/VideoBox";
import useMiddleInteraction from "../../assets/js/use-middle-interaction";
import { computed, onMounted, onUpdated, ref } from "vue";

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

    // const turbulence = ref(null);
    // let frames = 1;
    // let rad = Math.PI / 180;
    // let bf, bfx, bfy;

    // *props
    const questionId = props.currentQuestion.id;
    const choices = props.questionChoices;
    // * ref
    // * store

    //  * computed
    const maskValue = computed(() => {
      return `linear-gradient(
          0,
          rgb(222, 210, 233),
          rgba(222, 210, 233, 0.8) ${maskTransform.redOffset}%,
          transparent ${maskTransform.transparentOffsetY}%
        );`;
    });
    const greyMask = computed(() => {
      return `linear-gradient(
           180deg,
          rgb(222, 210, 233),
          rgba(222, 210, 233, 0.8) ${maskTransform.greyOffset}%,
          transparent ${maskTransform.transparentOffsetYGrey}%
        );`;
    });
    const duration = computed(() => {
      return `${maskTransform.duration}ms`;
    });
    // * watch

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
      // window.requestAnimationFrame(freqAnimation);
    });

    //  * methods
    // function freqAnimation() {
    //   frames += 0.35;

    //   bfx = 0.035;
    //   bfy = 0.015;

    //   bfx += 0.01 * Math.cos(frames * rad);
    //   bfy += 0.009 * Math.sin(frames * rad);
    //   bf = bfx.toString() + " " + bfy.toString();
    //   turbulence.value.setAttributeNS(null, "baseFrequency", bf);
    //   window.requestAnimationFrame(freqAnimation);
    // }
    //  * return
    return {
      animation,
      swipeOne,
      swipeTwo,
      onMiddleTouchStart,
      onMiddleTouchMove,
      onMiddleTouchEnd,
      iconTransform,
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
      div {
        width: 100%;
        height: 100%;
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        // transform: scale(1.04, 1.04) translateX(-0.8rem);
        // @media only screen and (min-height: 667px) and (max-height: 667px) {
        //   transform: scale(1.08, 1.08);
        // }
        div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: scale(0.8);
          z-index: -2;
        }
        // img {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;

        // }
      }
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

  .top div {
    background: linear-gradient(
      90deg,
      rgb(108, 87, 73),
      rgb(59, 51, 46),
      rgb(150, 142, 124),
      rgb(163, 160, 132)
    );
  }

  .bottom div {
    background: linear-gradient(
      90deg,
      rgb(174, 192, 137),
      rgb(116, 72, 76),
      rgb(44, 32, 27),
      rgb(33, 25, 25)
    );
  }
  &-progress {
    height: 100%;
    width: 73.3%;
    @include absXCenter;
    &-top {
      position: absolute;
      top: -0.6rem;
      @media only screen and (min-height: 667px) and (max-height: 667px) {
        top: 0.8rem;
      }
      width: 100%;
      height: 29.1%;
      overflow: hidden;
      &-mask {
        height: 100%;
        width: 100%;

        bottom: -0.9rem;
        @include absXCenter;
        // filter: url(#smoke);
      }
    }
    &-container {
      @include absXCenter;

      top: 31%;
    }
    &-eagle {
      width: 19rem;
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
        width: 100%;

        @include absXCenter;
        top: -0.9rem;
        // filter: url(#smoke);
      }
    }

    &-instruction {
      color: $color-text-py;
      font-size: 1.4rem;

      line-height: 3.6rem;
      text-align: center;
      position: absolute;
      left: 3%;
      // left: 0;
      // right: 0;

      // @media only screen and (min-height: 844px) {
      //   left: 28%;
      // }
      top: 75%;
      // top: 39%;
      animation: jump 2s infinite ease;
    }
  }

  @media only screen and (min-height: 667px) and (max-height: 667px) {
    .q7-progress-bottom {
      bottom: 22%;
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
