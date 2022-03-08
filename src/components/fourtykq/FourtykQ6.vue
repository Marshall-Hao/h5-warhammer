<template>
  <div class="q6" :style="questionBackground">
    <h1 class="q6-title">{{ questionText }}</h1>
    <div class="q6-section">
      <div
        v-for="(answer, index) in questionChoices"
        :key="answer"
        class="q6-card"
        @touchstart.prevent="flipCard(index)"
      >
        <div
          class="q6-card-side q6-card-front"
          :class="{ 'front-flip': flip === index }"
          :style="{
            background: `url(${answer.image})`,
            backgroundSize: `cover`,
          }"
        ></div>
        <div
          class="q6-card-side q6-card-back"
          :class="{ 'back-flip': flip === index }"
          @touchmove.prevent="backPos"
        >
          <div class="q6-card-back-content">
            <div
              class="q6-card-back-btn"
              :class="{ 'selected-q': selected === index }"
              @touchstart.prevent="choiceTouchStart(index)"
              @touchmove.prevent="choiceTouchMove(index)"
              @touchend.prevent="choiceTouchEnd(answer.id)"
            >
              pick the card
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="q6-text">{{ currentQuestion.instruction }}</p>
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
    const { choiceTouchMove, choiceTouchEnd, choiceTouchStart, selected } =
      useSelectPattern(emit, questionId);
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
      choiceTouchStart,
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
    width: 18rem;
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
      transition: all 0.8s ease;
    }
    &-back {
      transform: rotateY(180deg);
      padding: 1.1rem 1rem 0.8rem 1rem;
      &-content {
        background-color: $color-background;
        height: 100%;
        width: 100%;
        text-align: center;
        position: relative;
        border-radius: 0.3rem;
        box-shadow: 0 1.5rem 4rem rgba($color-background-d, 0.15);
      }
      &-btn {
        @include absCenter;
      }
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
