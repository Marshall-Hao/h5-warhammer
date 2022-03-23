<template>
  <div class="q3 fixed-no-scroll">
    <div class="q3-background" :style="questionBackground"></div>
    <h1 class="q3-title">{{ questionText }}</h1>
    <div class="q3-section">
      <div class="q3-choices">
        <div
          class="q3-choice"
          ref="q"
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :class="{ 'selected-q3': selected === index }"
          :style="`background-image:url(${answer.image})`"
          @touchstart.prevent="choiceTouchStart(index)"
          @touchmove.prevent="choiceTouchMove(index)"
          @touchend.prevent="choiceTouchEnd(answer.id)"
          @mouseenter.prevent="choiceTouchStart(index)"
          @mousemove.prevent="choiceTouchMove(index)"
          @mousedown="choiceTouchEnd(answer.id)"
        ></div>
      </div>
    </div>
    <!-- <svg width="0" height="0">
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
    </svg> -->
  </div>
</template>

<script>
import useSelectPattern from "../../assets/js/use-select-pattern";

export default {
  name: "aos-q3",
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
  mounted() {
    const choices = document.querySelectorAll(".q3-choice");
    choices.forEach((c) => {
      const w = window.innerWidth / 2 - 24;
      c.style.width = `${w}px`;
      c.style.height = `${w}px`;
    });
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
    filter: url(#fractal2);
  }
  &-title {
    // margin-top: 5rem;
    padding: 1rem 3rem;
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    letter-spacing: 0.2rem;
    line-height: 4rem;
  }
  &-section {
    padding: 4rem 3rem;
    box-sizing: border-box;
    height: 80%;
    width: 100%;
    box-sizing: border-box;
    @include flexCenter;
    align-items: flex-start;
  }
  &-choices {
    // display: flex;
    // justify-content: space-between;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 4rem;
    // padding: 0 2.2rem;
    // margin-top: 9.5rem;
    animation: rotateIn 1.5s;
    div {
      // width: 16rem;
      // height: 16rem;
      width: 100%;
      height: 100%;
      align-self: center;
      justify-self: center;
      background-size: cover;
      // margin-bottom: 5rem;
      animation: fadeIn 1s ease-in, logo4 10s infinite ease-in-out forwards;
    }
  }
}

.selected-q3 {
  animation: rotateOut 1s ease-out forwards !important;
}

@keyframes rotate {
  0% {
    transform: rotateZ(0);
  }
  50% {
    transform: rotateZ(360deg);
  }
  100% {
    transform: rotateZ(0);
  }
}
</style>
