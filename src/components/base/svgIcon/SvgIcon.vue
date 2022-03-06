<template>
  <svg class="icon">
    <use :href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    name: Number,
    prefix: {
      type: String,
      default: "war-q3",
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

use {
  fill: black;
  stroke: black;
  stroke-width: 5;

  animation: logo 2s infinite alternate;
}

@keyframes logo {
  0% {
    fill: rgba(72, 138, 20, 0);
    stroke: black;
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 1;
  }
  70% {
    fill: rgba(72, 138, 20, 0);
    stroke: black;
    stroke-width: 3;
  }
  90%,
  100% {
    fill: black;
    stroke: rgba(54, 95, 160, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}
</style>
