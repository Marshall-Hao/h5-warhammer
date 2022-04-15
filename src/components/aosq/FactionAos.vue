<template>
  <!-- <div v-show="blink">
    <lighting></lighting>
  </div> -->
  <div
    class="pre-reveal"
    :class="{ revealed: !pre }"
    @touchstart.prevent="preReveal"
    @mousedown="preReveal"
  >
    <p>点击揭晓</p>
  </div>
  <div
    v-show="!pre"
    class="effect-page"
    ref="white"
    @touchstart.prevent="holdReveal"
    @touchmove.prevent="speed = 100"
    @touchend.prevent="cancelReveal"
    @mouseenter="speed = 100"
    @mouseleave="speed = 1"
  >
    <p class="effect">长按以揭晓你的命运阵营</p>
  </div>
  <div v-show="!pre" class="number" ref="number">0</div>
</template>

<script>
import Lighting from "../base/lighting/Lighting.vue";
import gsap from "gsap";
let animate1 = null;
export default {
  name: "faction-aos",
  components: {
    Lighting,
  },
  data() {
    return {
      blink: false,
      pre: true,
      speed: 1,
    };
  },
  methods: {
    holdReveal() {
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
      this.pre = false;
    },
  },
};
</script>

<style lang="scss" scoped>
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
  font-family: sans-serif;
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
  background-image: url(../../assets/images/regular/aosPrereveal.png);
  background-size: cover;
  // filter: url(#fractal);
  p {
    font-size: 2rem;
    width: 17.6rem;
    line-height: 3.6rem;
    @include absXCenter;
    bottom: 18%;
  }
}

.revealed {
  animation: fadeOut 1.5s forwards;
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
