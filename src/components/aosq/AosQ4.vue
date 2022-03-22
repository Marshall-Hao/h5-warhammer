<template>
  <div class="q4 fixed-no-scroll" :style="questionBackground">
    <h1 class="q4-title">
      {{ questionText }}
    </h1>
    <div class="q4-section-wrapper">
      <div class="glide q4-section">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li
              class="glide__slide"
              v-for="(answer, index) in questionChoices"
              :key="answer"
            >
              <div
                class="q4-choice"
                :style="`background-image:url(${answer.image})`"
              ></div>
              <div
                class="q4-pick"
                :class="{ 'selected-q': selected === index }"
                @touchstart.prevent="choiceTouchStart(index)"
                @touchmove.prevent="choiceTouchMove(index)"
                @touchend.prevent="choiceTouchEnd(answer.id)"
                @mouseenter.prevent="choiceTouchStart(index)"
                @mousemove.prevent="choiceTouchMove(index)"
                @mousedown="choiceTouchEnd(answer.id)"
              >
                Select
              </div>
            </li>
          </ul>
          <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
              <svg width="16.5" height="30" viewBox="0 0 110 200">
                <polyline
                  points="100 0, 0 100, 100 200,110 190,25 100, 110 10 "
                  fill="rgb(165, 147, 93)"
                  stroke-linecap="round"
                >
                  <animate
                    id="l41"
                    attributeName="fill"
                    attributeType="XML"
                    from="rgb(255, 255, 255)"
                    to="rgb(165, 147, 93)"
                    dur="2s"
                    begin="0; l42.end"
                  ></animate>
                  <animate
                    id="l42"
                    attributeName="fill"
                    attributeType="XML"
                    from="rgb(165, 147, 93)"
                    to="rgb(255, 255, 255)"
                    dur="2s"
                    begin="l41.end"
                  ></animate>
                </polyline>
              </svg>
            </button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
              <svg width="16.5" height="30" viewBox="0 0 110 200">
                <polyline
                  points="10 200, 110 100, 10 0,0 10,85 100, 0 190 "
                  fill="#64798B"
                  stroke-linecap="round"
                >
                  <animate
                    id="r41"
                    attributeName="fill"
                    attributeType="XML"
                    from="#fff"
                    to="#64798B"
                    dur="2s"
                    begin="0; r42.end"
                  ></animate>
                  <animate
                    id="r42"
                    attributeName="fill"
                    attributeType="XML"
                    from="#64798B"
                    to="#fff"
                    dur="2s"
                    begin="r41.end"
                  ></animate>
                </polyline>
              </svg>
            </button>
          </div>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            <!-- <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
            <button class="glide__bullet" data-glide-dir="=3"></button> -->
          </div>
        </div>

        <p class="q4-instruction">
          {{ currentQuestion.instruction }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import useSelectPattern from "../../assets/js/use-select-pattern";
import Glide from "@glidejs/glide";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "aos-q4",
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
    onMounted(() => {
      new Glide(".glide", {
        type: "carousel",
      }).mount();
    });
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
    const choiceDim = { w: 271, h: 375 };
    // instruction text, margin top, padding bottom, select button area
    const safeH = window.innerHeight * 0.85 - 40 - 10 - 40 - 64;
    const safeW = window.innerWidth * 0.75;
    console.log({ safeH, safeW });
    const choices = document.querySelectorAll(".q4-choice");
    choices.forEach((c) => {
      // card.style.width
      if (safeW * (choiceDim.h / choiceDim.w) <= safeH) {
        console.log("use W");
        // w = safeW
        c.style.width = `${safeW}px`;
        c.style.height = `${safeW * (choiceDim.h / choiceDim.w)}px`;
      } else {
        c.style.height = `${safeH}px`;
        c.style.width = `${safeH * (choiceDim.w / choiceDim.h)}px`;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";

.q4 {
  // position: fixed;
  // top: 0;
  // left: 0;
  // height: 100%;
  // width: 100%;
  // overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  &-title {
    // margin-top: 5rem;
    font-size: 2.25rem;
    // letter-spacing: 0.3rem;
    line-height: 3rem;
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-section-wrapper {
    height: 85%;
    width: 100%;
    @include flexCenter;
    // flex-direction: column;
    align-items: center;
  }
  &-section {
    // margin-top: 6rem;
  }
  &-choice {
    margin: auto;
    // width: 27.1rem;
    // height: 37.5rem;
    background-size: cover;
    // animation: pulse 2s infinite forwards;
  }
  &-pick {
    // margin-top: 6rem;
    font-size: 2rem;
    height: 3rem;
    width: 10rem;
    border: 1px solid $color-text-py;
    color: $color-text-py;
    border-radius: 3rem;
    text-align: center;
    margin: 4rem auto 1.5rem;
    padding-top: 0.4rem;
  }
  &-instruction {
    margin-top: 1rem;
    // height: 15%; width: 100%;
    font-size: 1.8rem;
    line-height: 4rem;
    letter-spacing: 0.1rem;
    padding: 0 3rem;
    color: $color-text-py;
    // animation: shakeX 10s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
}
.selected-q {
  animation: pulse 2s infinite forwards;
}
.glide__arrow {
  border: 0px;
  &--left {
    left: 1rem;
    // animation: left 2s infinite forwards ease-in-out;
  }
  &--right {
    right: 0rem;
    // animation: right 2s infinite backwards ease-in-out;
  }
}
.glide__track {
  position: relative;
}
.glide__slide {
  overflow: visible;
  position: relative;
}
.glide__bullets {
  bottom: 9rem;
}
@keyframes left {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-0.7rem);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes right {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(0.7rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
