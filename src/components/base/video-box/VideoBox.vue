<template>
  <fly-box :lineColor="lineColor" :starColor="starColor" :duration="duration">
    <img :src="posterUrl" :style="style" />
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
    posterUrl: String,
    style: {
      type: Object,
      default: {
        transform: "scale(1.112, 1.1)",
      },
    },
  },
  components: {
    FlyBox,
  },
};
</script>

<style lang="scss" scoped>
img {
  object-fit: fit;
  height: 100%;
  width: 100%;
  // transform: scale(1.11, 1.1);
}
</style>
