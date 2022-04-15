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
      default: require("../../../assets/music/landing-music.wav"),
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
  activated() {
    this.autoPlay();
  },
  mounted() {
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
