<template>
  <div class="light" ref="light">
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="3.5"
            flood-color="skyblue"
          />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "lighting",
  mounted() {
    let { getMultiPathSVGCode } = require("lindsvg");
    // L-system parameters
    let lsParams = {
      axiom: "FYX",
      rules: {
        F: "FFFXFX-[FFFXFXY]",
        X: "Y+F+XF",
        Y: "[F+F+F+F]",
      },
      alpha: (160 * Math.PI) / 180,
      theta: (42 * Math.PI) / 180,
      iterations: 4,
      step: 1,
    };
    let svgParams = {
      width: 815,
      height: 755,
      pathAttributes: {
        stroke: "#dedeff",
        "stroke-width": ["4", "2", "1"],
        opacity: ["1", "0.6", "0.5", "0.2"],
        style: "filter: url(#glow)",
      },
    };

    let svgCode = getMultiPathSVGCode(lsParams, svgParams);
    this.$refs.light.insertAdjacentHTML(
      "beforeend",
      `<div id="sky">${svgCode}</div>`
    );
  },
};
</script>

<style>
.light {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
#sky {
  animation: sky 4s ease-in-out infinite;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
}
#sky svg {
  animation: lightning 4s ease-in-out infinite;
  max-height: 100vh;
  max-width: 100vw;
  position: absolute;
  top: 0;
  transform: translate(-50%, 0) scale(1.5, 1.5);
}

@keyframes lightning {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 0.8;
  }
  20% {
    opacity: 0.1;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sky {
  0% {
    opacity: 0.2;
  }
  15% {
    opacity: 0.8;
  }
  20% {
    opacity: 0.6;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
