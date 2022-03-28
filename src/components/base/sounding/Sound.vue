<template>
  <div class="sound" @click.prevent="toggleSound">
    <div v-show="isplaying" class="line"></div>
    <svg-icon
      prefix="war-"
      name="sound"
      fill="#C9C9C9"
      stroke="white"
      :duration="{}"
    ></svg-icon>
    <audio autoplay loop ref="audio">
      <source :src="soundUrl" type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
import SvgIcon from "../svgIcon/SvgIcon";

export default {
  name: "sound",
  components: {
    SvgIcon,
  },
  data() {
    return {
      isplaying: false,
    };
  },
  props: {
    soundUrl: {
      default: require("../../../assets/music/landing-music.wav"),
    },
  },
  mounted() {
    this.autoPlay();
  },
  methods: {
    autoPlay() {
      const audio = this.$refs.audio;
      // audio.play();
      function play() {
        audio.play();
        document.removeEventListener("touchstart", play, false);
      }
      document.addEventListener("WeixinJSBridgeReady", play, false);
      document.addEventListener("touchstart", play, false);
    },
    toggleSound() {
      const audio = this.$refs.audio;
      this.isplaying = !this.isplaying;
      if (!audio.paused) {
        audio.pause();
      } else {
        audio.play();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sound {
  height: 1.7rem;
  width: 1.3rem;
  @include extend-click;
  z-index: 10;
}
.line {
  width: 2rem;
  height: 1px;
  background: #c9c9c9;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(-60deg);
}
</style>
