<template>
  <div class="glide scene">
    <p class="scene-title" v-show="selected === null">
      滑动查看四个幻境 <br />
      选择你喜欢的据点
    </p>

    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li
          class="glide__slide"
          v-for="(answer, index) in choicesList"
          :key="answer"
        >
          <div
            class="scene-choice"
            :class="{ 'selected-q': selected === index }"
            :style="`background-image: url(${answer.image})`"
          >
<!--           <div
            class="scene-choice"
            :class="{ 'selected-q': selected === index }"
            :style="`background-image: linear-gradient(180deg, #222222 0%, rgba(34, 34, 34, 0) 27.79%), url(${answer.image})`"
          >
 -->            <div
              class="scene-pick"
              @touchstart.prevent="choiceTouchStart(index)"
              @touchmove.prevent="choiceTouchMove(index)"
              @touchend.prevent="choiceTouchEnd(answer.id)"
              @mouseenter.prevent="choiceTouchStart(index)"
              @mousemove.prevent="choiceTouchMove(index)"
              @mousedown="choiceTouchEnd(answer.id)"
              v-show="selected === null"
            >
              确认
            </div>
          </div>
        </li>
      </ul>
      <div
        class="glide__arrows"
        data-glide-el="controls"
        v-show="selected === null"
      >
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
      <div
        class="glide__bullets"
        data-glide-el="controls[nav]"
        v-show="selected === null"
      >
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
        <button class="glide__bullet" data-glide-dir="=3"></button>
      </div>
    </div>
  </div>
</template>

<script>
import useSelectPattern from "../../../assets/js/use-select-pattern";
import Glide from "@glidejs/glide";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "new-scene",
  props: {
    choicesList: Array,
    nowQuestion: Object,
  },
  emits: ["updateParams"],
  setup(props, { emit }) {
    //   * variables
    const questionId = props.nowQuestion.id;

    //  * ref

    // * hooks
    const { choiceTouchMove, choiceTouchEnd, choiceTouchStart, selected } =
      useSelectPattern(emit, questionId, 1700);
    // * lifecycle
    onMounted(() => {
      new Glide(".glide", {
        type: "carousel",
        gap: 0,
      }).mount();
    });
    // * methods

    // * return
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
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";
.scene {
  position: absolute;
  height: 100%;
  width: 100%;

  &-choice {
    position: relative;
    height: 100%;
    width: 100%;
    background-size: cover;
    mask: url(../../../assets/images/regular/maskdetail.png);
    mask-position: 100% 0;
    mask-size: 3000% 100%;
  }
  &-pick {
    @include absXCenter;
    width: 8.5rem;
    // height: 2.2rem;
    bottom: 5rem;
    color: #bc3f2f;
    font-size: 1.8rem;
    background-color: white;
    border-radius: 2rem;
    // padding-top: 0.3rem;
    padding: 0.5rem 0 0.3rem;
    border: 0.1rem solid #bc3f2f;
  }
  &-title {
    @include absXCenter;
    font-size: 2.2rem;
    line-height: 3rem;
    font-weight: 400;
    letter-spacing: 0.3rem;
    top: 5rem;
    z-index: 5;
  }
}

.glide__arrow {
  border: 0px;
  &--left {
    left: 1rem;
    // animation: left 2s infinite forwards ease-in-out;
  }
  &--right {
    right: 1rem;
    // animation: right 2s infinite backwards ease-in-out;
  }
}

.glide__track {
  position: relative;
  height: 100%;
  width: 100%;
}

.glide__slides {
  position: absolute;
  height: 100%;
  width: 100%;
}

.glide__bullet {
  width: 0.5rem;
  height: 0.5rem;
  &--active {
    background-color: #bc3f2f;
  }
}
.selected-q {
  animation: maskmove 2s steps(29) forwards;
}

@keyframes maskmove {
  0% {
    mask-position: 100% 0;
  }

  100% {
    mask-position: 0 0;
  }
}
// .glide__slide {
//   overflow: visible;
//   position: absolute;
//   height: 100px;
//   width: 100px;
// }
</style>
