<template>
  <audio autoplay loop ref="audio">
    <source :src="soundUrl" type="audio/wav" />
    Your browser does not support the audio element.
  </audio>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "sound",
  computed: {
    ...mapState(["play"]),
  },
  props: {
    soundUrl: {
      //  default: require("../../../assets/music/landing-music.wav"),
      default:
        "https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/landing-music.wav",
    },
  },
  watch: {
    play(newPlay) {
      if (newPlay) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
  },
  mounted() {
    this.autoPlay();
    // if (this.isplaying) {
    // }
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
  },
};
</script>
