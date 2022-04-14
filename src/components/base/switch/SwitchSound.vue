<template>
  <div class="sound" @click.prevent="toggleSound">
    <div v-show="!play" class="line"></div>
    <svg-icon
      prefix="war-"
      name="sound"
      fill="#C9C9C9"
      stroke="white"
      :duration="{}"
    ></svg-icon>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import SvgIcon from "../svgIcon/SvgIcon.vue";

export default {
  name: "switch-sound",
  components: {
    SvgIcon,
  },
  computed: {
    ...mapState(["play"]),
  },
  methods: {
    toggleSound() {
      this.togglePlay();
    },
    ...mapMutations(["togglePlay"]),
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
