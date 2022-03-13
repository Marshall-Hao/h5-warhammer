<template>
  <div class="fly-box" ref="flyBoxRef">
    <svg :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`">
      <defs>
        <path :id="pathId" :d="path" fill="none" />
        <mask :id="maskId">
          <circle r="50" cx="0" cy="0" :fill="`url(#${radialId})`">
            <animateMotion
              :dur="`${duration}s`"
              :path="path"
              rotate="auto"
              repeatCount="indefinite"
            ></animateMotion>
          </circle>
        </mask>
        <!-- fx fy 控制光源的位置 -->
        <radialGradient
          :id="radialId"
          cx="50%"
          cy="50%"
          fx="100%"
          fy="50%"
          r="50%"
        >
          <stop offset="0" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
      </defs>
      <use :href="`#${pathId}`" stroke-width="1" :stroke="lineColor" />
      <use
        :href="`#${pathId}`"
        stroke-width="3"
        :stroke="starColor"
        :mask="`url(#${maskId})`"
      />
    </svg>
    <div class="fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated, ref } from "vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "fly-box",
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
  },
  setup() {
    const width = ref(0);
    const height = ref(0);
    const flyBoxRef = ref(null);
    const uuid = uuidv4();
    const pathId = `fly-box-path-${uuid}`;
    const radialId = `radial-graident-${uuid}`;
    const maskId = `fly-box-mask-${uuid}`;
    const path = computed(() => {
      return `M5 5 L${width.value - 5} 5 L${width.value - 5} ${
        height.value - 5
      } L5 ${height.value - 5} Z`;
    });
    onUpdated(() => {
      init();
    });

    onMounted(() => {
      init();
    });

    function init() {
      const dom = flyBoxRef.value;
      width.value = dom.clientWidth;
      height.value = dom.clientHeight;
    }

    return {
      width,
      height,
      path,
      flyBoxRef,
      pathId,
      radialId,
      maskId,
    };
  },
};
</script>

<style lang="scss" scoped>
.fly-box {
  position: relative;
  width: 100%;
  height: 100%;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &-content {
    padding: 5px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
  }
}
</style>
