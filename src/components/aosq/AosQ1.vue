<template>
  <div class="q1 fixed-no-scroll">
    <div class="q1-background" :style="questionBackground"></div>
    <h1 class="q1-title">{{ questionText }}</h1>
    <section class="q1-section">
      <div class="q1-section-choices">
        <div
          class="q1-section-choice"
          ref="q"
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :class="{
            'select-card': selected === index,
            'unselect-card': selected !== index,
          }"
          :style="`background-image:url(${answer.image})`"
        >
          <div
            @touchstart.prevent="choiceTouchZoom(index, answer.id)"
            @touchmove.prevent="choiceTouchMove(index)"
            @mouseenter.prevent="choiceTouchStart(index)"
            @mousemove.prevent="choiceTouchMove(index)"
            @mousedown="choiceTouchEnd(answer.id)"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { nextTick } from "vue";
import useSelectPattern from "../../assets/js/use-select-pattern";
import gsap from "gsap";
import { getOffset } from "../../assets/js/dom";

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
      useSelectPattern(emit, questionId, 1500);
    //  * computed

    //  * lifecycle
    //  * methods
    async function choiceTouchZoom(index, answer) {
      // choiceTouchEnd(answer);
      choiceTouchStart(index);
      await nextTick();
      await nextTick();
      const selected = await document.querySelector(".select-card");
      let positionX = getOffset(selected).left;
      let positionY = getOffset(selected).top;
      const unselected = await document.querySelector(".unselect-card");
      if (unselected) {
        gsap
          .timeline()
          .to(".unselect-card", {
            opacity: 0,
            stagger: {
              amount: 0.5,
            },
          })
          .fromTo(
            ".select-card",
            {
              position: "absolute",
              left: `${positionX}`,
              top: `${positionY}`,
            },
            {
              xPercent: -50,
              left: "50%",
              yPercent: -50,
              top: "50%",
              position: "absolute",
              duration: 1,
              scale: 1.5,
              onComplete: () => {
                choiceTouchEnd(answer);
              },
            }
          );
      }
    }
    //  * return
    return {
      choiceTouchMove,

      choiceTouchZoom,
      selected,
    };
  },
  mounted() {
    if (window.innerWidth > 375) {
      // document.querySelector('.q1-title').style.height = "25%"
      // document.querySelector('.q1-section').style.height = "75%"
      this.setChoiceDimension(0.8);
    } else {
      document.querySelector(".q1-title").style.height = "15%";
      document.querySelector(".q1-section").style.height = "85%";
      this.setChoiceDimension(0.85);
    }
  },
  methods: {
    setChoiceDimension(sectionH) {
      const choices = document.querySelectorAll(".q1-section-choice");
      console.log({ choices });

      // how about just maximize and either use h or w depending on dimension ?
      let w = window.innerWidth - 10;
      let h = window.innerHeight * sectionH - 45 - 2;

      const useW = (w / 2) * (25 / 17) * 2 <= h;

      console.log({ useW });

      if (useW) {
        choices.forEach((c) => {
          c.style.width = `${w / 2}px`;
          c.style.height = `${(w / 2) * (25 / 17)}px`;
        });
      } else {
        choices.forEach((c) => {
          c.style.height = `${h / 2}px`;
          c.style.width = `${(h / 2) * (17 / 25)}px`;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@function randomNum($max, $min: 0, $u: 1) {
  @return ($min + random($max)) * $u;
}

.paddingY {
  padding: 4rem 0;
}

.q1 {
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
    // margin: 5rem 0 4rem;
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    animation: fadeInDown 1s;
  }
  &-section {
    padding: 0rem 1rem 4rem 1rem;
    height: 80%;
    width: 100%;
    box-sizing: border-box;
    @include flexCenter;
    align-items: flex-start;

    &-choice {
      justify-self: center;
      align-self: center;
    }
    &-choices {
      // display: flex;
      // justify-content: space-between;
      // flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 0.25rem;
      // row-gap: 1rem;
      width: 100%;
      div {
        // width: 16.5rem;
        // height: 28rem; dynamically injected
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        margin-bottom: 1rem;
        animation: zoomIn 0.8s ease-in;
        div {
          // height: 13rem;
          // width: 7rem;
          width: 100%;
          height: 100%;
          // margin: 12rem auto;
        }
      }
      // div::before,
      // div::after {
      //   position: absolute;
      //   // width: 16rem;
      //   // height: 26rem;
      //   width: 100%;
      //   height: 100%;
      //   top: 0;
      //   left: 0;
      //   background: inherit;
      // }
    }
  }
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
