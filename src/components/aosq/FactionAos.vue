<template>
  <div v-if="blink">
    <lighting></lighting>
  </div>
  <div
    class="pre-reveal"
    :class="{ revealed: !pre }"
    @touchstart.prevent="preReveal"
    @mousedown="preReveal"
  >
    <p>Click to reveal your faction</p>
  </div>
  <Renderer ref="renderer" pointer resize="window">
    <Camera :position="{ z: 0 }" :fov="50" />
    <Scene>
      <Points ref="points" :position="{ z: -150 }">
        <BufferGeometry :attributes="attributes" />
        <ShaderMaterial
          :props="{
            uniforms: uniforms,
            fragmentShader: fragmentShader,
            vertexShader: vertexShader,
            blending: 2,
            depthTest: false,
          }"
        >
          <Texture
            :src="require('@/assets/images/star/9.png')"
            uniform="uTexture"
          />
        </ShaderMaterial>
      </Points>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <UnrealBloomPass :strength="0.5" :radius="0" :threshold="0" />
      <ZoomBlurPass :strength="zoomStrength" />
    </EffectComposer>
  </Renderer>
  <div
    v-show="!pre"
    class="effect"
    @click="updateColors"
    @touchstart.prevent="holdReveal"
    @touchmove.prevent="targetTimeCoef = 100"
    @touchend.prevent="updateColors"
    @mouseenter="targetTimeCoef = 100"
    @mouseleave="targetTimeCoef = 1"
  >
    Hold to Reveal Faction<br />
    Release for Color
  </div>
  <div v-show="!pre" class="number" ref="number">0</div>
</template>

<script>
import {
  lerp,
  BufferGeometry,
  Camera,
  EffectComposer,
  Points,
  Renderer,
  RenderPass,
  Scene,
  ShaderMaterial,
  Texture,
  UnrealBloomPass,
  ZoomBlurPass,
} from "troisjs";
import { Clock, Color, MathUtils, Vector3 } from "three";
import gsap from "gsap";
import Lighting from "../base/lighting/Lighting.vue";

const niceColors = require("nice-color-palettes");

let animate1 = null;
export default {
  name: "faction-aos",
  components: {
    BufferGeometry,
    Camera,
    EffectComposer,
    Points,
    Renderer,
    RenderPass,
    Scene,
    ShaderMaterial,
    Texture,
    UnrealBloomPass,
    ZoomBlurPass,
    Lighting,
  },
  data() {
    return {
      zoomStrength: 0,
      blink: false,
      pre: true,
    };
  },
  mounted() {
    const renderer = this.$refs.renderer;
    const positionN = renderer.three.pointer.positionN;
    const points = this.$refs.points.points;
    renderer.onBeforeRender(() => {
      this.timeCoef = lerp(this.timeCoef, this.targetTimeCoef, 0.02);
      this.uniforms.uTime.value += this.clock.getDelta() * this.timeCoef * 4;
      this.zoomStrength = this.timeCoef * 0.004;

      const da = 0.05;
      const tiltX = lerp(points.rotation.x, positionN.y * da, 0.02);
      const tiltY = lerp(points.rotation.y, -positionN.x * da, 0.02);
      points.rotation.set(tiltX, tiltY, 0);
    });
  },
  methods: {
    updateColors() {
      animate1.pause();
      const { randFloat: rnd, randInt, randFloatSpread: rndFS } = MathUtils;
      this.targetTimeCoef = 10;
      const colorAttribute = this.$refs.points.geometry.attributes.color;
      const ip = randInt(0, 99);
      const palette = niceColors[ip];
      console.log(ip);
      const color = new Color();
      for (let i = 0; i < this.POINTS_COUNT; i++) {
        color.set(palette[randInt(0, palette.length)]);
        color.toArray(colorAttribute.array, i * 3);
      }
      colorAttribute.needsUpdate = true;
      const number = this.$refs.number;
      gsap.to(number, {
        innerText: 0,
        duration: 5,
        snap: {
          innerText: 1,
        },
        onUpdate: () => {
          if (number.innerText < 50) {
            number.style.color = "white";
          }
        },
      });
    },
    async holdReveal() {
      this.targetTimeCoef = 100;
      const number = this.$refs.number;
      animate1 = gsap.to(number, {
        innerText: 100,
        duration: 5,
        snap: {
          innerText: 1,
        },
        onUpdate: () => {
          this.blink = true;
          if (number.innerText > 25) {
            number.style.color = "#A5935D";
          }
          if (number.innerText > 50) {
            number.style.color = "#edcc69";
          }
        },
        onComplete: () => {
          this.$router.push({
            path: "/share",
          });
        },
      });
    },
    preReveal() {
      this.pre = false;
    },
  },
  setup() {
    const { randFloat: rnd, randInt, randFloatSpread: rndFS } = MathUtils;

    const vertexShader = `
  uniform float uTime;
  attribute vec3 color;
  attribute float size;
  attribute float velocity;
  varying vec4 vColor;
  void main(){
    vColor = vec4(color, 1.0);
    vec3 p = vec3(position);
    p.z = -150. + mod(position.z + uTime, 300.);
    vec4 mvPosition = modelViewMatrix * vec4( p, 1.0 );
    gl_PointSize = size * (-50.0 / mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;
    const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec4 vColor;
  void main() {
    gl_FragColor = vColor * texture2D(uTexture, gl_PointCoord);
  }
`;
    const POINTS_COUNT = 50000;

    const palette = niceColors[95];

    const positions = new Float32Array(POINTS_COUNT * 3);
    const colors = new Float32Array(POINTS_COUNT * 3);
    const sizes = new Float32Array(POINTS_COUNT);
    const v3 = new Vector3(),
      color = new Color();
    for (let i = 0; i < POINTS_COUNT; i++) {
      v3.set(rndFS(200), rndFS(200), rndFS(300));
      v3.toArray(positions, i * 3);
      color.set(palette[Math.floor(rnd(0, palette.length))]);
      color.toArray(colors, i * 3);
      sizes[i] = rnd(5, 20);
    }

    const attributes = [
      { name: "position", array: positions, itemSize: 3 },
      { name: "color", array: colors, itemSize: 3 },
      { name: "size", array: sizes, itemSize: 1 },
    ];

    const uniforms = { uTime: { value: 0 } };

    const clock = new Clock();

    const timeCoef = 1,
      targetTimeCoef = 10;

    return {
      POINTS_COUNT,
      attributes,
      uniforms,
      vertexShader,
      fragmentShader,
      clock,
      timeCoef,
      targetTimeCoef,
    };
  },
};
</script>

<style lang="scss" scoped>
.effect {
  position: fixed;
  bottom: 10%;
  left: 50%;
  width: 22rem;
  transform: translateX(-50%);
  padding: 1rem 2rem;
  font-family: sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  border: 1px solid #fff;
  border-radius: 3rem;
  background: rgba(0, 0, 0, 1);
  opacity: 0.6;
}
.number {
  position: fixed;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  top: 10%;
  @include absXCenter;
  font-size: 4rem;
  opacity: 0.6;
  color: #c9c9c9;
}

.pre-reveal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(../../assets/images/regular/aosprereveal.jpeg);
  background-size: cover;
  filter: url(#fractal);
  p {
    font-size: 2rem;
    width: 17.6rem;
    line-height: 3.6rem;
    @include absXCenter;
    bottom: 18%;
  }
}

.revealed {
  animation: fadeOut 1.5s forwards;
}

@keyframes breath {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
