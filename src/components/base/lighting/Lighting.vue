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
    const { getMultiPathSVGCode } = require("lindsvg");
    // L-system parameters
    const lsParamsOne = {
      axiom: "FYX",
      rules: {
        F: "FFFXFX-[FFFXFXY]",
        X: "Y+F+XF",
        Y: "[F]",
      },
      alpha: (160 * Math.PI) / 180,
      theta: (34 * Math.PI) / 180,
      iterations: 4,
      step: 1,
    };
    const lsParamsTwo = {
      axiom: "FYX",
      rules: {
        F: "FFFXFX-[FFFXFXY]",
        X: "Y+F+XF",
        Y: "[F+F]",
      },
      alpha: (160 * Math.PI) / 180,
      theta: (40 * Math.PI) / 180,
      iterations: 4,
      step: 1,
    };
    const lsParamsThree = {
      axiom: "FYX",
      rules: {
        F: "FFFXFX-[FFFXFXY]",
        X: "Y+F+XF",
        Y: "[F]",
      },
      alpha: (160 * Math.PI) / 180,
      theta: (40 * Math.PI) / 180,
      iterations: 4,
      step: 1,
    };
    const svgParams = {
      width: 815,
      height: 755,
      pathAttributes: {
        stroke: "#dedeff",
        "stroke-width": ["4", "2", "1"],
        opacity: ["1", "0.6", "0.5", "0.2"],
        style: "filter: url(#glow)",
      },
    };

    const svgCodeOne = getMultiPathSVGCode(lsParamsOne, svgParams);
    const svgCodeTwo = getMultiPathSVGCode(lsParamsTwo, svgParams);
    const svgCodeThree = getMultiPathSVGCode(lsParamsThree, svgParams);

    this.$refs.light.insertAdjacentHTML(
      "beforeend",
      `<div id="sky">${svgCodeOne}${svgCodeTwo}${svgCodeThree}</div>`
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
  z-index: 3;
}
#sky {
  animation: sky 3s ease-in-out infinite;
  bottom: 0;
  left: 0;
  position: fixed;
  background: black;
  right: 0;
  top: 0;
}
#sky svg:nth-child(1) {
  animation: lightning1 3s ease-in-out infinite;
  max-height: 100vh;
  max-width: 100vw;
  position: absolute;
  top: 0;
  transform: translate(-50%, 0) scale(1.5, 1.5);
}

#sky svg:nth-child(2) {
  animation: lightning2 3s ease-in-out infinite;
  max-height: 100vh;
  max-width: 100vw;
  position: absolute;
  top: 0;
  transform: translate(-85%, 0) scale(1.5, 1.5);
}

#sky svg:nth-child(3) {
  animation: lightning3 3s ease-in-out infinite;
  max-height: 100vh;
  max-width: 100vw;
  position: absolute;
  top: 0;
  transform: translate(-50%, 0) scale(1.5, 1.5);
}

@keyframes lightning1 {
  0% {
    opacity: 0;
  }
  15% {
    opacity: 0.8;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.1;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.2;
  }
}

@keyframes lightning2 {
  0% {
    opacity: 1;
  }
  15% {
    opacity: 0.1;
  }
  20% {
    opacity: 0.8;
  }
  25% {
    opacity: 0;
  }
  75% {
    opacity: 0.1;
  }
  100% {
    opacity: 0.2;
  }
}

@keyframes lightning3 {
  0% {
    opacity: 0.8;
  }
  15% {
    opacity: 0.1;
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
    opacity: 1;
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
    opacity: 0.8;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.8;
  }
}
</style>
