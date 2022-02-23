<template>
  <fly-box :lineColor="lineColor" :starColor="starColor" :duration="duration">
    <video src="#" poster="@/assets/images/vidPoster.png"></video>
  </fly-box>
</template>

<script>
import FlyBox from "../fly-box/FlyBox";

export default {
  name: "video-box",
  props: {
    lineColor: {
      type: String,
      default: "#235fa7",
    },
    starColor: {
      type: String,
      default: "#4fd2dd",
    },
    duration: {
      type: [String, Number],
      default: 2,
    },
    posterUrl: {
      type: String,
      default: "@/assets/images/vidPoster.png",
    },
  },
  components: {
    FlyBox,
  },
};
</script>

<style lang="scss" scoped>
video {
  width: 36rem;
  height: 17rem;
  object-fit: cover;
}
</style>
