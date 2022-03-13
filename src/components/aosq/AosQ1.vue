<template>
  <div class="q1">
    <div class="q1-background" :style="questionBackground"></div>
    <h1 class="q1-title">{{ questionText }}</h1>
    <section class="q1-section">
      <div class="q1-section-choices">
        <div
          ref="q"
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :class="{ 'selected-q': selected === index }"
          :style="`background-image:url(${answer.image})`"
        >
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
          scale="200"
        >
          <animate
            id="scale1"
            attributeName="scale"
            attributeType="XML"
            from="200"
            to="10"
            dur="2s"
            fill="freeze"
            begin="0; scale3.end"
          />
          <animate
            id="scale2"
            attributeName="scale"
            attributeType="XML"
            from="10"
            to="1"
            dur="2.5s"
            fill="freeze"
            begin="scale1.end"
          />
          <animate
            id="scale3"
            attributeName="scale"
            attributeType="XML"
            from="1"
            to="200"
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
import useSelectPattern from "../../assets/js/use-select-pattern";

export default {
  name: "aos-q1",
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
@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}
.q1 {
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
    filter: url(#fractal2);
    height: 100%;
    width: 100%;
    z-index: -2;
  }
  &-title {
    margin: 8rem 0;
    font-size: 2.5rem;
    animation: fadeInDown 1s, flash 3s infinite ease;
  }
  &-section {
    padding: 0rem 2rem;
    &-choices {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      div {
        width: 16rem;
        height: 26rem;
        background-size: cover;
        margin-bottom: 6rem;
        animation: zoomIn 0.8s ease-in,
          main-img-hide 8s infinite step-end forwards;
        div {
          height: 13rem;
          width: 7rem;
          margin: 12rem auto;
        }
      }
      div::before,
      div::after {
        position: absolute;
        width: 16rem;
        height: 26rem;
        top: 0;
        left: 0;
        background: inherit;
      }
    }
  }
}
.selected-q {
  transition: all 0.7s ease-in;
  transform: scale(1.2, 1.2);
}
@keyframes glitch-one {
  @for $i from 20 to 30 {
    #{$i / 2} {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
    }
  }

  15.5% {
    clip-path: inset(10px 0 320px);
    left: -20px;
  }
  16% {
    clip-path: inset(10px 0 320px);
    left: -10px;
    opacity: 0;
  }
  45% {
    opacity: 0.5;
    left: -20px;
    filter: hue-rotate(90deg) saturate(1.3);
  }
  45.5% {
    left: 0px;
    filter: invert(1);
  }

  46% {
    clip-path: inset(150px 0 160px);
    left: 15%;
  }
  46.5% {
    clip-path: inset(20px 0 200px);
    left: -10%;
    transform: scale(1.1);
  }
  47% {
    clip-path: inset(60px 0 20px);
    left: -11%;
    transform: scale(1.2);
  }
  47.5% {
    clip-path: inset(20 0 20px);
    left: 13%;
    transform: scale(1.3);
    filter: invert(0);
  }
  48% {
    clip-path: inset(120 0 120px);
    left: 15%;
    transform: scale(1.1);
  }
  48.5% {
    clip-path: inset(260px 0 10px);
    left: -11%;
    transform: scale(1.2);
    filter: none;
  }
  49% {
    clip-path: inset(5px 0 350px);
    left: 11%;
    transform: scale(1.3);
  }
  49.5% {
    clip-path: inset(105px 0 210px);
    left: 0%;
    transform: scale(1.1);
  }
  50% {
    clip-path: inset(175px 0 160px);
    left: -11%;
  }
  50.5% {
    clip-path: inset(95px 0 230px);
    left: -14%;
    transform: scale(1.2);
  }
  51% {
    clip-path: inset(235px 0 12px);
    left: -14%;
  }
  51.5% {
    clip-path: inset(350px 0 7px);
    left: -14%;
  }
  52% {
    clip-path: inset(320px 0 27px);
    left: -12%;
    transform: scale(1.1);
  }
  52.5% {
    clip-path: inset(190px 0 127px);
    left: -11%;
    transform: scale(1.3);
    filter: hue-rotate(90deg) saturate(1.3);
  }
  54% {
    clip-path: inset(20px 0 20px);
    left: 12%;
    transform: scale(1.1);
    filter: none;
  }
  54% {
  }
  @for $i from 54 to 100 {
    #{$i / 2} {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(45)}px 0 #{randomNum(180)}px);
    }
  }
}
@keyframes glitch-two {
  @for $i from 40 to 50 {
    #{$i / 2} {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(45)}px 0 #{randomNum(180)}px);
    }
  }

  25.5% {
    clip-path: inset(10px 0 320px);
    left: -20px;
  }
  26% {
    clip-path: inset(10px 0 320px);
    left: -10px;
    opacity: 0;
  }
  45% {
    opacity: 0.3;
    left: -20px;
    filter: hue-rotate(45deg) saturate(1.1);
  }
  45.5% {
    left: 0px;
    filter: invert(1.2);
  }

  46% {
    clip-path: inset(50px 0 260px);
    left: -12%;
  }
  46.5% {
    clip-path: inset(120px 0 100px);
    left: 8%;
    transform: scale(1.2);
  }
  47% {
    clip-path: inset(40px 0 300px);
    left: 8%;
    transform: scale(1.3);
  }
  47.5% {
    clip-path: inset(53px 0 70px);
    left: -9%;
    transform: scale(1.1);
    filter: invert(1.1);
  }
  48% {
    clip-path: inset(60px 0 120px);
    left: 11%;
    transform: scale(1.2);
  }
  48.5% {
    clip-path: inset(0px 0 310px);
    left: -12%;
    transform: scale(1.2);
    filter: none;
  }
  49% {
    clip-path: inset(65px 0 50px);
    left: 11%;
    transform: scale(1.3);
  }
  49.5% {
    clip-path: inset(10px 0 240px);
    left: 6%;
    transform: scale(1.1);
  }
  50% {
    clip-path: inset(75px 0 90px);
    left: -12%;
  }
  50.5% {
    clip-path: inset(50px 0 90px);
    left: 14%;
    transform: scale(1.4);
  }
  51% {
    clip-path: inset(35px 0 282px);
    left: -14%;
  }
  51.5% {
    clip-path: inset(80px 0 7px);
    left: 14%;
  }
  52% {
    clip-path: inset(20px 0 270px);
    left: -12%;
    transform: scale(1.1);
  }
  52.5% {
    clip-path: inset(90px 0 227px);
    left: -11%;
    transform: scale(1.3);
    filter: hue-rotate(150deg) saturate(1.3);
  }
  54% {
    clip-path: inset(55px 0 100px);
    left: 12%;
    transform: scale(1.1);
    filter: none;
  }
  @for $i from 54 to 100 {
    #{$i / 2} {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(45)}px 0 #{randomNum(180)}px);
    }
  }
}
@keyframes main-img-hide {
  5% {
    filter: invert(1);
  }
  5.2% {
    filter: none;
  }
  10% {
    opacity: 0.5;
    filter: grayscale(1);
  }
  11% {
    filter: none;
    opacity: 1;
  }
  45% {
    opacity: 0.5;
    filter: grayscale(1);
  }
  46% {
    filter: none;
    opacity: 1;
  }
  53.5% {
    opacity: 0.5;
    filter: grayscale(1);
  }
  54% {
    filter: none;
    opacity: 1;
  }
  54.5% {
    opacity: 0.5;
    filter: hue-rotate(30deg);
  }
  55% {
    filter: none;
  }
  55.5% {
    filter: none;
    opacity: 1;
  }
  56% {
    opacity: 0.5;
  }
  56.5% {
  }
  57% {
    filter: grayscale(1);
    opacity: 0.8;
  }
  57.5% {
    opacity: 0.8;
    filter: hue-rotate(30deg);
  }
  58% {
    filter: hue-rotate(30deg);
  }
  @for $i from 58 to 100 {
    #{$i / 2} {
      left: #{randomNum(200, -100)}px;
      clip-path: inset(#{randomNum(45)}px 0 #{randomNum(180)}px);
    }
  }
}
</style>
