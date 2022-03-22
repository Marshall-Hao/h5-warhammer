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
          :class="{ 'selected-q': selected === index }"
        >
          <!-- {{ answer.text }} -->
          <span v-for="letter in answer.text" :key="letter">{{ letter }}</span>
          <div
            @touchstart.prevent="choiceTouchStartSmoke(index)"
            @touchmove.prevent="choiceTouchMove(index)"
            @touchend.prevent="choiceTouchEnd(answer.id)"
            @mousedown="choiceTouchEnd(answer.id)"
            @mouseenter.prevent="choiceTouchStart(index)"
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
      useSelectPattern(emit, questionId, 1500);
    //  * computed
    async function choiceTouchStartSmoke(index) {
      await choiceTouchStart(index);
      gsap.to(".selected-q span", {
        // // x: 120,
        // // y: -60,
        // // rotate: -140,
        // // skewX: 70,
        // scale: 1.5,
        textShadow: "0 0 25px whitesmoke",
        filter: "blur(8px)",
        opacity: 0,
        stagger: {
          amount: 1,
        },
      });
    }
    //  * lifecycle
    //  * methods
    //  * return
    return {
      choiceTouchMove,
      choiceTouchEnd,
      choiceTouchStart,
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
    height: 10.9rem;
    width: 10rem;
    // filter: url(#fractal);
  }
  &-title {
    margin-top: 14rem;
    // letter-spacing: 0.3rem;
    line-height: 3.2rem;
    padding: 0 4rem;
    // color: #7d300b;
    color: $color-text-py;
    font-size: 2.6rem;
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
        font-size: 1.8rem;
        letter-spacing: 0.3rem;
        line-height: 2rem;
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
.selected-q {
  // span {
  //   animation: smoky 5s;
  // }
  // span:nth-child(even) {
  //   animation-name: smoky-mirror;
  // }
  // @for $item from 1 through 21 {
  //   span:nth-of-type(#{$item}) {
  //     animation-delay: #{(3 + ($item/10))}s;
  //   }
  // }
  animation: smoky 1s;
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
