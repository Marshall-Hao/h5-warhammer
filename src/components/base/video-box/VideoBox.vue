<template>
  <fly-box :lineColor="lineColor" :starColor="starColor" :duration="duration">
    <img
      src="@/assets/images/map.png"
      :width="width"
      :height="height"
      style="filter: url(#fractal2)"
    />
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
      default: "@/assets/images/map.png",
    },
    width: {
      type: Number,
      default: 360,
    },
    height: {
      type: Number,
      default: 170,
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
  transform: scale(1.11, 1.175);
}
</style>
