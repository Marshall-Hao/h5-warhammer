<template>
  <div v-if="blink">
    <lighting></lighting>
  </div>
  <Renderer
    ref="renderer"
    resize
    antialias
    :orbit-ctrl="{ autoRotate: true, enableDamping: true, dampingFactor: 0.05 }"
  >
    <Camera ref="camera" :position="{ z: 20 }" />
    <Scene background="#000000" ref="scene">
      <AmbientLight :intensity="0.5" color="#513f51" />
      <PointLight :position="{ y: 50, z: 0 }" />
      <PointLight
        color="#513f51"
        :intensity="3"
        :position="{ x: -100, z: 50 }"
      />
      <PointLight
        color="#513f51"
        :intensity="3"
        :position="{ y: -100, z: 0 }"
      />
      <Sphere
        ref="mesh"
        :radius="2.5"
        :width-segments="200"
        :height-segments="200"
      >
        <StandardMaterial :props="{ displacementScale: 0.2 }">
          <Texture
            :src="
              require('../../assets/images/skullplane/Ground Skull_basecolor.jpg')
            "
          />
          <Texture
            :src="
              require('../../assets/images/skullplane/Ground Skull_height.png')
            "
            name="displacementMap"
          />
          <Texture
            :src="
              require('../../assets/images/skullplane/Ground Skull_normal.jpg')
            "
            name="normalMap"
          />
          <Texture
            :src="
              require('../../assets/images/skullplane/Ground Skull_roughness.jpg')
            "
            name="roughnessMap"
          />
          <Texture
            :src="
              require('../../assets/images/skullplane/Ground Skull_ambientOcclusion.jpg')
            "
            name="aoMap"
          />
        </StandardMaterial>
      </Sphere>
    </Scene>
    <EffectComposer>
      <RenderPass />
      <FilmPass :noiseIntensity="3" :scanlinesIntensity="0.1" />
      <UnrealBloomPass :strength="0.2" />
    </EffectComposer>
  </Renderer>
  <p
    class="reveal-title"
    @touchstart.prevent="onTouchstart"
    @mousedown="onTouchstart"
  >
    click to reveal your faction
  </p>
</template>

<script>
import { CubeTextureLoader, NearestFilter, sRGBEncoding } from "three";
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { gsap } from "gsap";
import Lighting from "../base/lighting/Lighting.vue";

export default {
  name: "faction-fourtyk",
  components: {
    Lighting,
  },
  setup() {
    const cubeTextureLoader = new CubeTextureLoader();
    const environmentMap = cubeTextureLoader.load([
      require("../../assets/images/space-cube/px.png"),
      require("../../assets/images/space-cube/nx.png"),
      require("../../assets/images/space-cube/py.png"),
      require("../../assets/images/space-cube/ny.png"),
      require("../../assets/images/space-cube/pz.png"),
      require("../../assets/images/space-cube/nz.png"),
    ]);
    environmentMap.generateMipmaps = false;
    environmentMap.minFilter = NearestFilter;
    environmentMap.encoding = sRGBEncoding;
    //    * ref
    const scene = ref(null);
    const camera = ref(null);
    const blink = ref(false);
    // * lefecycle
    onMounted(() => {
      const space = scene.value.scene;
      space.background = environmentMap;
      space.environment = environmentMap;
    });
    // * methods
    function onTouchstart() {
      console.log(camera.value.camera.position.z);
      gsap
        .timeline()
        .to(camera.value.camera.position, { z: 10, x: 5, y: 5, duration: 4 });
      blink.value = true;
    }
    return {
      scene,
      camera,
      onTouchstart,
      blink,
    };
  },
};
</script>

<style lang="scss" scoped>
.reveal-title {
  @include absXCenter;
  width: 25rem;
  position: absolute;
  bottom: 7rem;
  font-size: 2rem;
  letter-spacing: 0.3rem;
  line-height: 3.2rem;
}
</style>
