<template>
  <div class="q6" :style="questionBackground">
    <h1 class="q6-title">{{ questionText }}</h1>
    <div class="q6-section">
      <div
        v-for="(answer, index) in questionChoices"
        :key="answer"
        class="q6-card"
        @touchstart.prevent="flipCard(index)"
        @touchmove.prevent="choiceTouchMove(index)"
        @mouseenter.prevent="flipCard(index)"
        @mousemove.prevent="choiceTouchMove(index)"
      >
        <div
          class="q6-card-side q6-card-back"
          :class="{ 'back-flip': flip === index }"
          :style="{
            background: `url(${answer.image})`,
            backgroundSize: `cover`,
          }"
          @touchmove.prevent="backPos"
          @touchend.prevent="choiceTouchEnd(answer.id)"
          @mousemove.prevent="backPos"
          @mouseleave="choiceTouchEnd(answer.id)"
        ></div>
        <div
          class="q6-card-side q6-card-front"
          :class="{ 'front-flip': flip === index }"
        >
          <div class="q6-card-front-content">
            <div class="q6-card-front-btn">Flip</div>
          </div>
        </div>
      </div>
    </div>
    <p class="q6-text">{{ currentQuestion.instruction }}</p>
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
    function flipCard(index) {
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
      choiceTouchEnd,
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
  &-title {
    font-size: 3.5rem;
    color: #000;
    margin-top: 5.5rem;
    animation: flipInY 1.8s ease infinite;
  }
  &-section {
    width: 100%;
    padding: 0rem 1rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 6rem;
  }
  &-card {
    height: 25rem;
    width: 17rem;
    margin-bottom: 3rem;
    position: relative;
    perspective: 150rem;
    -moz-perspective: 150rem;
    animation: zoomIn 1.8s ease;
    &-side {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 25rem;
      backface-visibility: hidden;
      overflow: hidden;
      transition: all 0.6s ease;
    }
    &-front {
      padding: 1.1rem 1rem 0.8rem 1rem;
      &-content {
        background: url(../../assets/images/regular/warhammerMask.png);
        height: 100%;
        width: 100%;
        text-align: center;
        position: relative;
        border-radius: 0.3rem;
        filter: url(#fractal2);
      }
      &-btn {
        @include absCenter;
        letter-spacing: 0.3rem;
        font-size: 1.2rem;
        animation: flipInY 1.8s ease infinite;
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
    animation: flipInY 1.8s ease infinite;
  }
}
.front-flip {
  transform: rotateY(-180deg);
}
.back-flip {
  transform: rotateY(0);
}
</style>
