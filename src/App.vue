<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <svg width="0" height="0">
    <filter
      id="fractal"
      filterUnits="objectBoundingBox"
      x="0%"
      y="0%"
      width="100%"
      height="100%"
    >
      <feTurbulence
        id="turbulence"
        type="fractalNoise"
        baseFrequency="0.032 0.02"
        numOctaves="1"
      >
        <animate
          id="wave1"
          attributeName="baseFrequency"
          attributeType="XML"
          from="0.032 0.02"
          to="0.022 0.01"
          dur="3.5s"
          fill="freeze"
          begin="0; wave2.end"
        />
        <animate
          id="wave2"
          attributeName="baseFrequency"
          attributeType="XML"
          from="0.022 0.01"
          to="0.032 0.02"
          dur="3.5s"
          fill="freeze"
          begin="wave1.end"
        />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
    </filter>
  </svg>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  max-width: 414px;
}
</style>
