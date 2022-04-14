<template>
  <div class="q6">
    <div class="q6-background" :style="questionBackground"></div>
    <div
      class="q6-icon"
      :style="{
        background: `url(${currentQuestion.selector_image})`,
        backgroundSize: `cover`,
      }"
    ></div>
    <h1 class="q6-title">{{ questionText }}</h1>
    <section class="q6-section">
      <div class="q6-section-choices">
        <div
          ref="q"
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :class="{
            'selected-q6': selected === index,
            'unselect-q': selected !== index,
          }"
        >
          <!-- {{ answer.text }} -->
          <span v-for="letter in answer.text" :key="letter">{{ letter }}</span>
          <div
            @touchstart.prevent="choiceTouchStartSmoke(index, answer.id)"
            @touchmove.prevent="choiceTouchMove(index)"
            @mouseenter.prevent="choiceTouchStartSmoke(index, answer.id)"
            @mousemove.prevent="choiceTouchMove(index)"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import useSelectPattern from "../../assets/js/use-select-pattern";
import gsap from "gsap";

export default {
  name: "aos-q6",
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
      useSelectPattern(emit, questionId, 1200);
    //  * computed
    async function choiceTouchStartSmoke(index, answer) {
      await choiceTouchStart(index);
      const unselected = await document.querySelector(".unselect-q");
      if (unselected) {
        gsap
          .timeline()
          .to(".unselect-q", {
            opacity: 0,
            stagger: {
              amount: 0.5,
            },
          })
          .to(".selected-q6 span", {
            textShadow: "0 0 25px whitesmoke",
            filter: "blur(8px)",
            opacity: 0,
            stagger: {
              amount: 2,
            },
          })
          .to(
            ".selected-q6",
            {
              translateX: 80,
              translateY: -40,
              rotate: -40,
              skewX: 60,
              scale: 1.2,
              duration: 2,
              onComplete: () => {
                choiceTouchEnd(answer);
              },
            },
            "<"
          );
      }
    }
    //  * lifecycle
    //  * methods
    //  * return
    return {
      choiceTouchMove,

      choiceTouchStartSmoke,
      selected,
    };
  },
};
</script>

<style lang="scss" scoped>
.q6 {
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

    height: 100%;
    width: 100%;
    z-index: -2;
  }
  &-icon {
    @include absXCenter;
    margin-top: 2rem;
    height: 15.9rem;
    width: 15rem;
    // height: 10.9rem;
    // width: 10rem;
    // filter: url(#fractal);
  }
  &-title {
    margin-top: 20rem;
    letter-spacing: 0.2rem;
    padding: 0 4.5rem;
    // color: #7d300b;
    color: $color-text-py;
    font-size: 2rem;
    line-height: 2.4rem;
    // animation: fadeInDownBig 1s, shadowtext 5s infinite ease-out;
    animation: fadeInDownBig 1s;
  }
  &-section {
    margin-top: 6rem;
    &-choices {
      display: flex;
      flex-direction: column;
      // padding: 0 3rem;
      animation: backInUp 1s ease-in;

      div {
        position: relative;
        font-size: 2rem;
        letter-spacing: 0.2rem;
        line-height: 2.8rem;
        margin: 0 auto 4rem;
        border-radius: 1rem;
        // transition: 0.2s all;
        // width: 25.5rem;
        width: 70%;
        // filter: url("#filter");

        div {
          height: 60%;
          width: 50%;
          @include absCenter;
        }
      }
    }
  }
}

@keyframes shadowtext {
  0% {
    text-shadow: 1px 1px 1px #fff, -1px -1px 1px #000;
  }
  50% {
    text-shadow: 1px 1px 1px #000, -1px -1px 1px #fff;
  }
  100% {
    text-shadow: 1px 1px 1px #fff, -1px -1px 1px #000;
  }
}

@keyframes smoky {
  to {
    transform: translate3d(8rem, -6rem, 0) rotate(-30deg) skewX(60deg)
      scale(1.2);
  }
}

@keyframes smoky-mirror {
  60% {
    text-shadow: 0 0 40px whitesmoke;
  }
  to {
    transform: translate3d(12rem, -6rem, 0) rotate(-40deg) skewX(70deg)
      scale(1.5);
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}
</style>
