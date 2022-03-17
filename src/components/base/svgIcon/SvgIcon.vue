<template>
  <svg :class="icon">
    <use :href="iconName" :style="duration" :fill="fill" :stroke="stroke"></use>
  </svg>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    name: [Number, String],
    prefix: {
      type: String,
      default: "war-q3",
    },
    duration: {
      type: Object,
      default: {
        // animationDuration: "5s",
        animation: "logo3 3s infinite alternate",
      },
    },
    fill: {
      type: String,
      default: "black",
    },
    stroke: {
      type: String,
      default: "rgba(72, 138, 20, 0)",
    },
    icon: {
      type: String,
      default: "icon",
    },
  },
  setup(props) {
    const iconName = `#${props.prefix}${props.name}`;
    return {
      iconName,
    };
  },
};
</script>

<style lang="scss" scoped>
.icon {
  height: 100%;
  width: 100%;
  @include absCenter;
}

.icon-special {
  height: 100%;
  width: 100%;
  @include absXCenter;
  top: 11%;
}

use {
  // fill: black;
  // stroke: black;
  stroke-width: 5;

  // animation: logo infinite alternate;
  // animation-duration: 3s;
}
</style>
