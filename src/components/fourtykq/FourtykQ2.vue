<template>
  <div class="q2 fixed-no-scroll">
    <div class="q2-background" :style="questionBackground"></div>
    <h1 class="q2-title">{{ questionText }}</h1>
    <section class="q2-section">
      <div class="q2-section-choices">
        <div
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :style="{
            backgroundImage: `url(${answer.image})`,
          }"
          :class="{ 'selected-q': selected === index }"
          @touchstart.prevent="
            choiceTouchStartParticle(index, $event, answer.id)
          "
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

    <!-- <audio ref="audio">
      <source src="../../assets/music/laser.wav" type="audio/wav" />
      Your browser does not support the audio element.
    </audio> -->
  </div>
</template>

<script>
import useSelectPattern from "../../assets/js/use-select-pattern";

// import particleCanvas from "../../assets/js/particle";

// import { ref } from "vue";
// import gsap from "gsap";

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
    // const q = ref(null);
    // const audio = ref(null);
    // * store

    // * hooks
    const { choiceTouchMove, choiceTouchEnd, choiceTouchStart, selected } =
      useSelectPattern(emit, questionId, 1500);
    //  * computed
    //  * lifecycle

    //  * methods
    async function choiceTouchStartParticle(index, e, answer) {
      choiceTouchStart(index);
      // particleCanvas(e.target);

      // audio.value.play();

      // particleCanvas(e.target);
      // await nextTick();
      // gsap
      //   .timeline()
      //   .to(".q2-section-choices-mask", {
      //     display: "none",
      //     duration: 0.5,
      //     onStart: () => {
      //       particleCanvas(e.target);
      //     },
      //   })
      //   .to(".selected-q", {
      //     onStart: () => {
      //       audio.value.play();
      //     },
      //     translateX: "120%",
      //     duration: 1.5,
      //     // ease: "sine.out",
      //     onComplete: () => {
      //       choiceTouchEnd(answer);
      //     },
      //   });
    }

    //  * return
    return {
      choiceTouchMove,
      choiceTouchEnd,
      choiceTouchStartParticle,
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
    // font-size: 2.5rem;
    font-weight: 400;
    font-size: 1.9rem;
    line-height: 2.6rem;
    letter-spacing: 0.05rem;
    padding: 0 2.5rem;
    // filter: url(#fractal);
  }
  &-section {
    position: relative;
    // height: 70rem;
    // animation: pulse 2s 1s infinite ease-in-out;
    height: 80%;
    width: 100%;
    padding-bottom: 4.5rem;
    box-sizing: border-box;

    @include flexCenter;
    &-choices {
      // @include absCenter;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;

      div {
        margin: 0 auto;
        position: relative;
        width: 26rem;
        // height: 14rem;
        height: 22%;
        // background-size: cover;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;

        // margin-bottom: 4rem;
        div {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2;
          // width: 26rem;
          // height: 14rem;
          height: 100%;
          mask: url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/maskdetail.png);
          mask-position: 100% 0;
          mask-size: 3000% 100%;
          animation: maskmove 2s 1s steps(29) forwards;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: 0.5;
            border-radius: 2rem;
            background-image: url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/warhammerMask.png);
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
  animation: slideRight 2s ease forwards;
}
@keyframes maskmove {
  0% {
    mask-position: 100% 0;
  }

  100% {
    mask-position: 0 0;
  }
}
@keyframes slideRight {
  100% {
    transform: translateX(200%);
  }
}
</style>
