<template>
  <div class="q7 fixed-no-scroll">
    <div class="q7-background" :style="questionBackground"></div>
    <div class="q7-banner"
        :style="{
          'background-image': `url(${currentQuestion.instruction_image})`,
        }">
      <!-- <div
        class="q7-banner-inner"
        :style="{
          'background-image': `url(${currentQuestion.instruction_image})`,
        }"
      ></div> -->
    </div>
    <div class="q7-section">
      <h1 class="q7-title">{{ questionText }}</h1>
      <div class="q7-choices">
        <div
          ref="q"
          v-for="(answer, index) in questionChoices"
          :key="answer"
          :style="`background-image:url(${answer.image})`"
          :class="{ 'selected-q': selected === index }"
          @touchstart.prevent="choiceTouchStartParticle(index, $event)"
          @touchmove.prevent="choiceTouchMove(index)"
          @touchend.prevent="choiceTouchEnd(answer.id)"
          @mousedown="choiceTouchEnd(answer.id)"
          @mouseenter.prevent="choiceTouchStart(index)"
          @mousemove.prevent="choiceTouchMove(index)"
        >
          <div :class="{ 'selected-qd': selected === index }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useSelectPattern from "../../assets/js/use-select-pattern";
import particleCanvas from "../../assets/js/particle";

export default {
  name: "aos-q7",
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
      useSelectPattern(emit, questionId, 2100);
    //  * computed

    //  * lifecycle
    //  * methods
    function choiceTouchStartParticle(index, e) {
      choiceTouchStart(index);

      particleCanvas(e.target, false);
    }
    //  * return
    return {
      choiceTouchMove,
      choiceTouchEnd,
      choiceTouchStartParticle,
      selected,
    };
  },
  mounted() {
    // setting dimensions dynamically
    const scrollDim = { w: 563, h: 512 };
    // const bannerDim = { w: 296, h: 205 };
    const bannerDim = { w: 192, h: 252 };
    const choiceDim = { w: 312, h: 74 };
    const banner = document.querySelector(".q7-banner");
    banner.style.height = `${
      banner.offsetWidth * (scrollDim.h / scrollDim.w)
    }px`;
    // console.log('banner', document.querySelector('.q7-banner'))
    // const innerBanner = document.querySelector(".q7-banner-inner");
    // innerBanner.style.height = `${0.95 * banner.offsetHeight}px`;
    // innerBanner.style.width = `${
    //   0.95 * banner.offsetHeight * (bannerDim.w / bannerDim.h)
    // }px`;
    // innerBanner.style.width = `${0.8 * banner.offsetWidth}px`;
    // innerBanner.style.height = `${
    //   0.8 * banner.offsetWidth * (bannerDim.h / bannerDim.w)
    // }px`;
    const section = document.querySelector(".q7-section");
    section.style.height = `${window.innerHeight - banner.offsetHeight}px`;
    const choices = document.querySelectorAll(".q7-choices > div");
    // console.log({choices})
    choices.forEach((c) => {
      c.style.width = `${0.85 * window.innerWidth}px`;
      c.style.height = `${
        0.85 * window.innerWidth * (choiceDim.h / choiceDim.w)
      }px`;
    });
  },
};
</script>

<style lang="scss" scoped>
$img: "../../assets/images/regular/q7banner.png";
// @function randomNum($max, $min: 0, $u: 1) {
//   @return ($min + random($max)) * $u;
// }
.q7 {
  // position: fixed;
  // top: 0;
  // left: 0;
  // height: 100vh;
  // width: 100vw;
  // overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  &-background {
    position: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    filter: url(#fractal2);
    height: 100vh;
    width: 100vw;
    z-index: -2;
  }
  &-banner {
    position: relative;
    // background: url(../../assets/images/regular/reel.png);
    // background-size: contain;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    // height: 37rem;
    // margin-top: 3rem;
    animation: fadeIn 1.5s;
    &-inner {
      @include absXCenter;
      // top: 10%;
      // top: 2%;
      // margin-top: 8rem;
      // width: 29rem;
      // height: 20.5rem;
      // background: url($img);
      // background-size: cover;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      // animation: main-img-hide 5s infinite step-end;
      // &::before,
      // &::after {
      //   position: absolute;
      //   width: 29rem;
      //   height: 20.5rem;
      //   top: 0;
      //   left: 0;
      //   background: inherit;
      // }

      // &::after {
      //   content: "";
      //   animation: glitch-one 5s infinite step-end;
      // }

      // &::before {
      //   content: "";
      //   animation: glitch-two 5s infinite 1s step-end;
      // }
    }
  }
  &-section {
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
    box-sizing: border-box;
  }
  &-title {
    height: 25%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // letter-spacing: 0.3rem;
    font-size: 2.5rem;
    line-height: 3.2rem;
    // filter: url(#fractal);
  }

  &-choices {
    // margin-top: 7rem;
    height: 75%;
    width: 100%;
    // @include absXCenter;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    animation: zoomIn 1.5s ease-in-out;
    div {
      // width: 31.2rem;
      // height: 7.4rem;
      // width: 80%;
      // height: 40%;
      margin-top: 2.5rem;
      // @media only screen and (max-height: 667px) {
      //   height: 50%;
      // }
      background-size: cover;
      // * contain will looks normal on chrome but weird on phone, cover will looks good on phone,but bad on chrome
      background-position: center;
      background-repeat: no-repeat;
      // margin-bottom: 5rem;
      position: relative;
      div {
        position: absolute;
        margin: 0;
        top: 10%;
        left: 25%;
        right: 0;
        z-index: -2;
        // width: 26rem;
        // height: 14rem;
        height: 70%;

        // mask: url(../../assets/images/regular/maskdetail.png);
        // mask-position: 100% 0;
        // mask-size: 3000% 100%;
        // animation: maskmove 2s 1s steps(29) forwards;

        width: 50%;

        border-radius: 2rem;
        background-color: $color-sub-theme;
      }
    }
  }
}
.selected-q {
  animation: slideRight 2s ease forwards;
}
.selected-qd {
  opacity: 0;
}
@keyframes slideRight {
  100% {
    transform: translateX(45rem);
  }
}

@keyframes opacity {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
// @keyframes glitch-one {
//   @for $i from 20 to 30 {
//     #{$i / 2} {
//       left: #{randomNum(200, -100)}px;
//       clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
//     }
//   }

//   15.5% {
//     clip-path: inset(10px 0 320px);
//     left: -20px;
//   }
//   16% {
//     clip-path: inset(10px 0 320px);
//     left: -10px;
//     opacity: 0;
//   }
//   45% {
//     opacity: 0.5;
//     left: -20px;
//     filter: hue-rotate(90deg) saturate(1.3);
//   }
//   45.5% {
//     left: 0px;
//     filter: invert(1);
//   }

//   46% {
//     clip-path: inset(95px 0 160px);
//     left: 15%;
//   }
//   46.5% {
//     clip-path: inset(20px 0 200px);
//     left: -10%;
//     transform: scale(1.1);
//   }
//   47% {
//     clip-path: inset(105px 0 20px);
//     left: -11%;
//     transform: scale(1.2);
//   }
//   47.5% {
//     clip-path: inset(20 0 20px);
//     left: 13%;
//     transform: scale(1.3);
//     filter: invert(0);
//   }
//   48% {
//     clip-path: inset(120 0 120px);
//     left: 15%;
//     transform: scale(1.1);
//   }
//   48.5% {
//     clip-path: inset(110px 0 10px);
//     left: -11%;
//     transform: scale(1.2);
//     filter: none;
//   }
//   49% {
//     clip-path: inset(5px 0 350px);
//     left: 11%;
//     transform: scale(1.3);
//   }
//   49.5% {
//     clip-path: inset(55px 0 210px);
//     left: 0%;
//     transform: scale(1.1);
//   }
//   50% {
//     clip-path: inset(85px 0 160px);
//     left: -11%;
//   }
//   50.5% {
//     clip-path: inset(95px 0 230px);
//     left: -14%;
//     transform: scale(1.2);
//   }
//   51% {
//     clip-path: inset(115px 0 12px);
//     left: -14%;
//   }
//   51.5% {
//     clip-path: inset(145px 0 7px);
//     left: -14%;
//   }
//   52% {
//     clip-path: inset(140px 0 27px);
//     left: -12%;
//     transform: scale(1.1);
//   }
//   52.5% {
//     clip-path: inset(100px 0 127px);
//     left: -11%;
//     transform: scale(1.3);
//     filter: hue-rotate(90deg) saturate(1.3);
//   }
//   54% {
//     clip-path: inset(20px 0 20px);
//     left: 12%;
//     transform: scale(1.1);
//     filter: none;
//   }
//   54% {
//     background-image: none;
//   }
// }

// @keyframes glitch-two {
//   @for $i from 40 to 50 {
//     #{$i / 2} {
//       left: #{randomNum(200, -100)}px;
//       clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
//     }
//   }

//   25.5% {
//     clip-path: inset(10px 0 320px);
//     left: -20px;
//   }
//   26% {
//     clip-path: inset(10px 0 320px);
//     left: -10px;
//     opacity: 0;
//   }
//   45% {
//     opacity: 0.3;
//     left: -20px;
//     filter: hue-rotate(45deg) saturate(1.1);
//   }
//   45.5% {
//     left: 0px;
//     filter: invert(1.2);
//   }

//   46% {
//     clip-path: inset(50px 0 260px);
//     left: -12%;
//   }
//   46.5% {
//     clip-path: inset(80px 0 100px);
//     left: 8%;
//     transform: scale(1.2);
//   }
//   47% {
//     clip-path: inset(40px 0 300px);
//     left: 8%;
//     transform: scale(1.3);
//   }
//   47.5% {
//     clip-path: inset(96px 0 70px);
//     left: -9%;
//     transform: scale(1.1);
//     filter: invert(1.1);
//   }
//   48% {
//     clip-path: inset(100px 0 120px);
//     left: 11%;
//     transform: scale(1.2);
//   }
//   48.5% {
//     clip-path: inset(0px 0 310px);
//     left: -12%;
//     transform: scale(1.2);
//     filter: none;
//   }
//   49% {
//     clip-path: inset(108px 0 50px);
//     left: 11%;
//     transform: scale(1.3);
//   }
//   49.5% {
//     clip-path: inset(10px 0 240px);
//     left: 6%;
//     transform: scale(1.1);
//   }
//   50% {
//     clip-path: inset(128px 0 90px);
//     left: -12%;
//   }
//   50.5% {
//     clip-path: inset(86px 0 90px);
//     left: 14%;
//     transform: scale(1.4);
//   }
//   51% {
//     clip-path: inset(35px 0 282px);
//     left: -14%;
//   }
//   51.5% {
//     clip-path: inset(145px 0 7px);
//     left: 14%;
//   }
//   52% {
//     clip-path: inset(20px 0 270px);
//     left: -12%;
//     transform: scale(1.1);
//   }
//   52.5% {
//     clip-path: inset(90px 0 227px);
//     left: -11%;
//     transform: scale(1.3);
//     filter: hue-rotate(150deg) saturate(1.3);
//   }
//   54% {
//     clip-path: inset(106px 0 100px);
//     left: 12%;
//     transform: scale(1.1);
//     filter: none;
//   }
//   54% {
//     background-image: none;
//   }
// }

// @keyframes main-img-hide {
//   5% {
//     filter: invert(1);
//   }
//   5.2% {
//     filter: none;
//   }
//   10% {
//     opacity: 0.5;
//     filter: grayscale(1);
//   }
//   11% {
//     filter: none;
//     opacity: 1;
//   }
//   45% {
//     opacity: 0.5;
//     filter: grayscale(1);
//   }
//   46% {
//     filter: none;
//     opacity: 1;
//   }
//   53.5% {
//     opacity: 0.5;
//     filter: grayscale(1);
//   }
//   54% {
//     filter: none;
//     opacity: 1;
//   }
//   54.5% {
//     opacity: 0.5;
//     filter: hue-rotate(30deg);
//   }
//   55% {
//     filter: none;
//   }
//   55.5% {
//     background-image: none;
//     filter: none;
//     opacity: 1;
//   }
//   56% {
//     background-image: url($img);
//     opacity: 0.5;
//   }
//   56.5% {
//     background-image: none;
//   }
//   57% {
//     background-image: url($img);
//     opacity: 0.8;
//   }
//   57.5% {
//     opacity: 0.3;
//   }
//   58% {
//     background-image: url($img);
//   }
// }
</style>
