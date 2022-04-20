<template>
  <!-- <div v-show="blink">
    <lighting></lighting>
  </div> -->
  <div
    class="pre-reveal"
    @touchstart.prevent="preReveal"
    @mousedown="preReveal"
  >
    <p>点击揭晓</p>
  </div>
  <div class="fires">
    <div class="fires-all" :style="animationSpeed">
      <div
        v-for="(fire, index) in new Array(16)"
        :key="index"
        class="fires-side"
      ></div>
    </div>
  </div>
  <div
    class="effect-page"
    ref="white"
    @touchstart.prevent="holdReveal"
    @touchmove.prevent="speed = 3.5"
    @touchend.prevent="cancelReveal"
    @mouseenter="speed = 3.5"
    @mouseleave="speed = 6"
  >
    <p class="effect">长按以揭晓你的命运阵营</p>
  </div>
  <div class="number" ref="number">0</div>
</template>

<script>
// import Lighting from "../base/lighting/Lighting.vue";
import gsap from "gsap";
let animate1 = null;
export default {
  name: "faction-aos",
  // components: {
  //   Lighting,
  // },
  data() {
    return {
      blink: false,

      speed: 6,
    };
  },
  computed: {
    animationSpeed() {
      return {
        animationDuration: `${this.speed}s`,
        // animation: ` ${this.speed}s linear infinite polygon`,
      };
    },
  },
  methods: {
    holdReveal() {
      this.speed = 3.5;
      const number = this.$refs.number;
      const white = this.$refs.white;
      animate1 = gsap.to(number, {
        innerText: 100,
        duration: 5,
        snap: {
          innerText: 1,
        },
        onUpdate: () => {
          if (number.innerText > 25) {
            number.style.color = "#A5935D";
          }
          if (number.innerText > 50) {
            number.style.color = "#edcc69";
          }
          if (number.innerText > 98) {
            white.style.background = "rgba(255, 255, 255, 0.7)";
          }
        },
        onComplete: () => {
          this.blink = true;
          this.$router.push({
            path: "/share",
          });
        },
      });
    },
    cancelReveal() {
      if (this.blink) {
        return;
      }
      this.speed = 6;
      animate1.pause();
      const white = this.$refs.white;
      const number = this.$refs.number;

      gsap.to(number, {
        innerText: 0,
        duration: 5,
        snap: {
          innerText: 1,
        },
        onUpdate: () => {
          white.style.background = "";
          if (number.innerText < 50) {
            number.style.color = "";
          }
        },
      });
    },
    preReveal() {
      // this.blink = true;
      // setTimeout(() => {
      //   this.$router.push({
      //     path: "/share",
      //   });
      // }, 5000);

      gsap.timeline().to(".pre-reveal", {
        opacity: 0,
        zIndex: 0,
        duration: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@function pow($number, $exp) {
  $value: 1;
  @if $exp > 0 {
    @for $i from 1 through $exp {
      $value: $value * $number;
    }
  } @else if $exp < 0 {
    @for $i from 1 through -$exp {
      $value: $value / $number;
    }
  }
  @return $value;
}
@function fact($number) {
  $value: 1;
  @if $number > 0 {
    @for $i from 1 through $number {
      $value: $value * $i;
    }
  }
  @return $value;
}
@function pi() {
  @return 3.14159265359;
}

@function rad($angle) {
  $unit: unit($angle);
  $unitless: $angle / ($angle * 0 + 1);
  // If the angle has 'deg' as unit, convert to radians.
  @if $unit == deg {
    $unitless: $unitless / 180 * pi();
  }
  @return $unitless;
}

@function sin($angle) {
  $sin: 0;
  $angle: rad($angle);
  // Iterate a bunch of times.
  @for $i from 0 through 10 {
    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / fact(2 * $i + 1);
  }
  @return $sin;
}

@function cos($angle) {
  $cos: 0;
  $angle: rad($angle);
  // Iterate a bunch of times.
  @for $i from 0 through 10 {
    $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / fact(2 * $i);
  }
  @return $cos;
}

@function tan($angle) {
  @return sin($angle) / cos($angle);
}
$n: 16; // number of sides
$r: 25vmin; // inradius (apothem)
$a: 2 * $r * tan(180deg / $n); // side length
.fires {
  background-color: #340468;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  perspective: 3.125vmin;
  z-index: -3;
  // perspective: 3.125vmin;
  &::after {
    background-color: #340468;
    border-radius: 50%;
    box-shadow: 0 0 2.5vmin 2.5vmin #340468;
    content: "";
    height: 2.5vmin;
    @include absCenter;
    width: 2.5vmin;
  }
  &-all {
    animation-name: polygon;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    left: 50%;
    position: absolute;
    top: 50%;
    transform-style: preserve-3d;
    transform: rotatex(90deg) rotatey(0) translatey(-25vmin);
  }
  &-side {
    background-image: url(../../assets/images/regular/aosreveal.png);
    background-size: ($n * $a) 25%;
    filter: hue-rotate(-10deg);
    position: absolute;
    height: 100vmin;
    transform-origin: 0;
    width: calc(#{$a} + 1px);
    @for $i from 1 through $n {
      &:nth-child(#{$i}) {
        background-position: ($a * $i * -1) 0;
        transform: rotatey(360deg / $n * $i) translate3d(-50%, -50%, $r);
      }
    }
  }
}

.effect-page {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.effect {
  position: fixed;
  bottom: 10%;
  left: 50%;
  width: 22rem;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  // font-family: sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  border: 1px solid #fff;
  border-radius: 3rem;
  background: rgba(0, 0, 0, 1);
  opacity: 0.6;
}
.number {
  position: fixed;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  top: 10%;
  @include absXCenter;
  font-size: 4rem;
  opacity: 0.6;
  color: #c9c9c9;
}

.pre-reveal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;

  width: 100%;
  // background: linear-gradient(#e66465, #9198e5);
  background: linear-gradient(0deg, rgba(33, 33, 33, 0.5) 18%, transparent),
    url(../../assets/images/regular/aosPrereveal.png);
  background-size: cover;
  z-index: 3;
  // filter: url(#fractal);
  p {
    font-size: 2rem;
    width: 17.6rem;
    line-height: 3.6rem;
    @include absXCenter;
    bottom: 18%;
  }
}

// .revealed {
//   animation: fadeOut 1.5s forwards;
// }

@keyframes polygon {
  100% {
    transform: rotatex(90deg) rotatey(360deg) translatey(0);
  }
}

@keyframes breath {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
