<template>
  <div class="q6 fixed-no-scroll" :style="questionBackground">
    <h1 class="q6-title">{{ questionText }}</h1>
    <div class="q6-section">
      <div class="q6-grid">
        <div
          v-for="(answer, index) in questionChoices"
          :key="answer"
          class="q6-card"
          :class="{
            'select-card': flip === index,
            'unselect-card': flip !== index,
          }"
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
                <!-- Flip -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick, ref } from "vue";
import useSelectPattern from "../../assets/js/use-select-pattern";
import gsap from "gsap";
import { getOffset } from "../../assets/js/dom";

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
      questionId,
      2500
    );
    //  * methods
    let firstMove = false;
    async function flipCard(index, answer) {
      // choiceTouchEnd(answer);
      if (firstMove) return;
      flip.value = index;
      await nextTick();
      await nextTick();
      const selected = await document.querySelector(".select-card");
      let positionX = getOffset(selected).left;
      let positionY = getOffset(selected).top;
      const unselected = await document.querySelector(".unselect-card");
      firstMove = true;
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
            }
          )
          .to(".front-flip", {
            rotateY: -180,
          })
          .to(
            ".back-flip",
            {
              rotateY: 0,
              duration: 0.5,
              onComplete: () => {
                choiceTouchEnd(answer);
              },
            },
            "<"
          );
      }
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
    if (window.innerHeight > 800) {
      document.querySelector(".q6").classList.add("paddingY");
    }

    if (window.innerWidth > 375) {
      this.setChoiceDimension(0.8);
    } else {
      this.setChoiceDimension(0.8);
    }
  },
  methods: {
    setChoiceDimension(sectionH) {
      const cards = document.querySelectorAll(".q6-card");
      console.log({ cards });

      let w = window.innerWidth - 40 - 2;
      let h = window.innerHeight * sectionH - 45 - 10;

      const useW = (w / 2) * (25 / 17) * 2 <= h;
      console.log({ useW });

      if (useW) {
        cards.forEach((c) => {
          c.style.width = `${w / 2}px`;
          c.style.height = `${(w / 2) * (25 / 17)}px`;
        });
      } else {
        cards.forEach((c) => {
          c.style.height = `${h / 2}px`;
          c.style.width = `${(h / 2) * (17 / 25)}px`;
        });
      }
    },
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
    // font-size: 3rem;
    font-size: 1.9rem;
    line-height: 2.7rem;
    letter-spacing: 0.05rem;
    color: #6b6868;
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

    // width: 100%;
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
    filter: drop-shadow(0px 0px 10px #64798b);

    &-side {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // height: 25rem;
      backface-visibility: hidden;
      overflow: hidden;
      transition: all 2s ease;
    }
    &-front {
      padding: 1.1rem 1rem 0.8rem 1rem;

      &-content {
        background: url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/warhammerMask.png);
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
        height: 18rem;
        width: 10rem;
        padding-top: 7rem;
      }
    }
    &-back {
      transform: rotateY(180deg);
    }
  }
  &-text {
    margin-top: 3rem;
    color: $color-text-pr;
    font-size: 2rem;
    filter: url(#fractal);
  }
}
</style>
