<template>
  <div v-if="blink">
    <lighting></lighting>
  </div>
  <div
    class="pre-reveal"
    @touchstart.prevent="preReveal"
    @mousedown="preReveal"
  >
    <p>Click to reveal your faction</p>
  </div>
</template>

<script>
import Lighting from "../base/lighting/Lighting.vue";

export default {
  name: "faction-aos",
  components: {
    Lighting,
  },
  data() {
    return {
      blink: false,
    };
  },
  methods: {
    preReveal() {
      this.blink = true;
      setTimeout(() => {
        this.$router.push({
          path: "/share",
        });
      }, 5000);
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
  background-image: url(../../assets/images/regular/aosprereveal.jpeg);
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
