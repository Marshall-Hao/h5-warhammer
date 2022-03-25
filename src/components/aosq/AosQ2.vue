<template>
  <div class="q2 fixed-no-scroll" :style="questionBackground">
    <h1 class="q2-title">
      {{ questionText }}
    </h1>
    <!-- <div
      class="q2-banner"
      :style="{
        background: `url(${currentQuestion.instruction_image})`,
        backgroundSize: 'cover',
      }"
    ></div> -->
    <div class="q2-section">
      <div class="q2-choices">
        <div
          ref="q"
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :class="{ 'selected-q': selected === index }"
          :style="{
            backgroundImage: `url(${answer.image})`,
          }"
          @touchstart.prevent="choiceTouchStartParticle(index, $event)"
          @touchmove.prevent="choiceTouchMove(index)"
          @touchend.prevent="choiceTouchEnd(answer.id)"
          @mouseenter.prevent="choiceTouchStart(index)"
          @mousemove.prevent="choiceTouchMove(index)"
          @mousedown="choiceTouchEnd(answer.id)"
        >
          <div :class="{ 'selected-qd': selected === index }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useSelectPattern from "../../assets/js/use-select-pattern";
import particleCanvas from "../../assets/js/particle";

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
    // const turbulence = ref(null);
    // let frames = 1;
    // let rad = Math.PI / 180;
    // let bf, bfx, bfy;
    // * store

    // * hooks
    const { choiceTouchMove, choiceTouchEnd, choiceTouchStart, selected } =
      useSelectPattern(emit, questionId, 2100);
    //  * computed

    //  * lifecycle
    // onMounted(() => {
    //   window.requestAnimationFrame(freqAnimation);
    // });
    //  * methods
    function choiceTouchStartParticle(index, e) {
      choiceTouchStart(index);
      particleCanvas(e.target, e);
    }
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
      choiceTouchMove,
      choiceTouchEnd,
      choiceTouchStartParticle,
      selected,
    };
  },
};
</script>

<style lang="scss" scoped>
.q2 {
  // position: fixed;
  // top: 0;
  // left: 0;
  // height: 100%;
  // width: 100%;
  // overflow-y: scroll;
  // overflow-x: hidden;
  text-align: center;
  &-title {
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    // margin: 5rem auto 3rem;
  }
  // &-banner {
  //   width: auto;
  //   margin: 0 1.5rem;
  //   // height: 20.5rem;
  //   height: 25%;
  //   animation: flipInY 1.5s;
  //   position: relative;

  // &::before {
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   top: -0.8rem;
  //   right: 0;
  //   bottom: 0;
  //   width: 120%;
  //   background: linear-gradient(
  //     180deg,
  //     rgba(35, 46, 254, 1),
  //     rgba(192, 247, 254, 0.8) 20%,
  //     transparent 35%
  //   );
  //   filter: url(#smoke);
  // }
  // }
  &-section {
    @include flexCenter;
    // padding: 2rem 0rem;
    padding-bottom: 4.5rem;
    height: 80%;
    width: 100%;
    box-sizing: border-box;
  }
  &-choices {
    // @include absXCenter;
    // margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    animation: zoomInUp 1s ease-in;
    width: 90%;
    overflow: hidden;
    div {
      // width: 23.3rem;
      width: 70%;
      // height: 9rem;
      height: 100%;

      // margin-bottom: 1.5rem;
      position: relative;
      background-position: top;
      background-size: contain;
      background-repeat: no-repeat;
      div {
        position: absolute;
        top: 15%;
        @media only screen and (min-height: 668px) {
          top: 9%;
          height: 43%;
        }
        @media only screen and (min-height: 667px) and (max-height: 667px) {
          top: 14%;
          height: 55%;
        }
        left: 12%;
        height: 62%;
        width: 80%;
        z-index: -2;

        background: linear-gradient(
          90deg,
          rgb(132, 117, 80),
          rgb(208, 197, 151),
          rgb(228, 220, 196),
          rgb(194, 180, 125)
        );
      }
    }
  }
}
.selected-q {
  animation: slideRight 2s ease forwards;
}

.selected-qd {
  opacity: 0;
}

@keyframes slideRight {
  100% {
    transform: translateX(35rem);
  }
}
</style>
