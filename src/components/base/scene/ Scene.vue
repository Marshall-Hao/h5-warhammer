<template>
  <div class="scene">
    <Renderer
      ref="renderer"
      resize
      antialias
      :orbit-ctrl="{
        autoRotate: true,
        enableDamping: true,
        enableZoom: false,
      }"
    >
      <Camera :position="{ z: 160 }" :aspect="ratio" :fov="75" />
      <Scene background="#000" ref="scene">
        <HemisphereLight />

        <DirectionalLight
          :position="{ x: 0, y: 200, z: 100 }"
          cast-shadow
          :shadow-camera="{ top: 180, bottom: -120, left: -120, right: 120 }"
        />
        <Mesh :scale="{ x: 16, y: 16, z: -16 }" receive-shadow>
          <SphereGeometry
            ref="mesh"
            :radius="1"
            :width-segments="200"
            :height-segments="200"
          />
          <BasicMaterial>
            <Texture :src="scene" />
          </BasicMaterial>
        </Mesh>
        <FbxModel :src="logo" :scale="scale" @load="onLoad" />
      </Scene>
    </Renderer>
  </div>
</template>

<script>
import {
  Renderer,
  Camera,
  Scene,
  HemisphereLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  BasicMaterial,
  Texture,
  FbxModel,
} from "troisjs";

export default {
  name: "scene",
  components: {
    Renderer,
    Camera,
    Scene,
    HemisphereLight,
    DirectionalLight,
    Mesh,
    SphereGeometry,
    BasicMaterial,
    Texture,
    FbxModel,
  },
  data() {
    return {
      ratio: 1,
    };
  },
  props: {
    scene: {
      default: null,
    },
    logo: {
      default: require("../../../assets/eaglelogo/eagle.fbx"),
    },
    scale: {
      type: Object,
      default: { x: 0.005, y: 0.005, z: 0.005 },
    },
  },
  mounted() {
    //  * camera aspect ratio
    this.ratio = window.innerWidth / window.innerHeight;
    //   * geometry
    const geometry = this.$refs.mesh.geometry;
    geometry.scale(16, 16, -16);
  },
  methods: {
    onLoad(object) {
      object.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.scene {
  height: 100%;
  width: 100%;
}
</style>
