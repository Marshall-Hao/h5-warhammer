<template>
  <div class="q6 fixed-no-scroll" :style="questionBackground">
    <h1 class="q6-title">{{ questionText }}</h1>
    <div class="q6-section">
      <div class="q6-grid">
        <div
          v-for="(answer, index) in questionChoices"
          :key="answer"
          class="q6-card"
        >
          <div
            class="q6-card-side q6-card-back"
            :class="{ 'back-flip': flip === index }"
            :style="{
              background: `url(${answer.image})`,
              backgroundSize: `cover`,
              borderRadius: '1.3rem',
            }"
            @mouseleave="backPos"
          ></div>
          <div
            class="q6-card-side q6-card-front"
            :class="{ 'front-flip': flip === index }"
          >
            <div class="q6-card-front-content">
              <div
                class="q6-card-front-btn"
                @touchstart.prevent="flipCard(index, answer.id)"
                @mouseenter.prevent="flipCard(index, answer.id)"
                @mousemove.prevent="choiceTouchMove(index)"
              >
                Flip
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          scale="10"
        >
          <animate
            id="scale1"
            attributeName="scale"
            attributeType="XML"
            from="10"
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
            to="10"
            dur="2s"
            fill="freeze"
            begin="scale2.end"
          />
        </feDisplacementMap>
      </filter>
    </svg>
    <svg width="0" height="0">
      <filter
        id="fractal"
        filterUnits="objectBoundingBox"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
      >
        <feTurbulence
          id="turbulence"
          type="fractalNoise"
          baseFrequency="0.032 0.02"
          numOctaves="1"
        >
          <animate
            id="wave1"
            attributeName="baseFrequency"
            attributeType="XML"
            from="0.032 0.02"
            to="0.022 0.01"
            dur="3.5s"
            fill="freeze"
            begin="0; wave2.end"
          />
          <animate
            id="wave2"
            attributeName="baseFrequency"
            attributeType="XML"
            from="0.022 0.01"
            to="0.032 0.02"
            dur="3.5s"
            fill="freeze"
            begin="wave1.end"
          />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
      </filter>
    </svg>
  </div>
</template>

<script>
import { ref } from "vue";
import useSelectPattern from "../../assets/js/use-select-pattern";

export default {
  name: "fourtyk-q6",
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
    const flip = ref(null);
    // * store

    //  * computed
    //  * lifecycle
    // * hooks
    const { choiceTouchMove, choiceTouchEnd } = useSelectPattern(
      emit,
      questionId
    );
    //  * methods
    function flipCard(index, answer) {
      choiceTouchEnd(answer);
      flip.value = index;
    }
    function backPos() {
      flip.value = null;
    }
    //  * return
    return {
      flip,
      flipCard,
      backPos,
      choiceTouchMove,
    };
  },
  mounted() {
    console.log(window);
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
    const cards = document.querySelectorAll(".q6-card");
    console.log({ cards });
    cards.forEach((card) => {
      const w = window.innerWidth / 2 - 20;
      card.style.width = `${w}px`;
      card.style.height = `${w * (25 / 17)}px`;
    });
    if (window.innerHeight > 800) {
      document.querySelector(".q6").classList.add("paddingY");
    }
  },
};
</script>

<style lang="scss" scoped>
.paddingY {
  padding: 4rem 0;
}
.q6 {
  // position: fixed;
  // top: 0;
  // left: 0;
  // height: 100%;
  // width: 100%;
  // overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  &-title {
    font-size: 3rem;
    color: #000;
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
    // margin-top: 5.5rem;
  }
  &-section {
    height: 80%;
    width: 100%;
    box-sizing: border-box;
    @include flexCenter;
    align-items: flex-start;
    padding: 0rem 2rem 4.5rem 2rem;
    box-sizing: border-box;
    // display: flex;
    // justify-content: space-between;
    // flex-wrap: wrap;
    // margin-top: 6rem;
  }
  &-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.25rem;
    row-gap: 1rem;
    width: 100%;
  }
  &-card {
    // height: 25rem;
    // width: 17rem;
    // height: 100%;;
    // width: 100%;
    // margin-bottom: 3rem;
    align-self: center;
    justify-self: center;
    position: relative;
    perspective: 150rem;
    -moz-perspective: 150rem;
    animation: zoomIn 1.8s ease;

    &-side {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // height: 25rem;
      backface-visibility: hidden;
      overflow: hidden;
      transition: all 0.5s ease;
    }
    &-front {
      padding: 1.1rem 1rem 0.8rem 1rem;

      &-content {
        background: url(../../assets/images/regular/warhammerMask.png);
        height: 100%;
        width: 100%;
        text-align: center;
        position: relative;
        border-radius: 1.5rem;
        // filter: url(#fractal2);
      }
      &-btn {
        @include absCenter;
        letter-spacing: 0.3rem;
        font-size: 1.2rem;
        height: 16rem;
        width: 8rem;
        padding-top: 7rem;
      }
    }
    &-back {
      transform: rotateY(180deg);
    }
    &:hover &-front {
      transform: rotateY(-180deg);
    }

    &:hover &-back {
      transform: rotateY(0);
    }
  }
  &-text {
    margin-top: 3rem;
    color: $color-text-pr;
    font-size: 2rem;
    filter: url(#fractal);
  }
}
.front-flip {
  transform: rotateY(-180deg);
}
.back-flip {
  transform: rotateY(0);
}
</style>
