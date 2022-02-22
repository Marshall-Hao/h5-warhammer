<template>
  <div class="landing-ball">
    <renderer ref="renderer" :alpha="true" :resize="true" antialias>
      <camera :position="{ z: 10 }"></camera>
      <scene>
        <ambient-light color="#808080"></ambient-light>
        <point-light color="#ffffff" :position="{ y: 50, z: 0 }"></point-light>
        <point-light color="#ffffff" :position="{ y: -50, z: 0 }"></point-light>
        <point-light color="#ffffff" :position="{ y: 0, z: 0 }"></point-light>
        <torus
          v-for="i in n"
          :key="i"
          :ref="`mesh${i}`"
          :radius="i * 0.1"
          :tube="0.1"
          :radial-segments="8"
          :tubular-segments="(i + 2) * 4"
        >
          <toon-material :color="color(i)"></toon-material>
        </torus>
      </scene>
    </renderer>
  </div>
</template>

<script>
import chroma from "chroma-js";

export default {
  name: "landing-ball",
  data() {
    return {
      n: 30,
      cscale: chroma.scale(["#5552fc", "#2622fb", "#004366"]),
    };
  },
  mounted() {
    const renderer = this.$refs.renderer;
    renderer.onBeforeRender(() => {
      const t = Date.now();
      let mesh, ti;
      for (let i = 1; i <= this.n; i++) {
        mesh = this.$refs[`mesh${i}`][0].mesh;
        ti = t - i * 500;
        mesh.rotation.x = ti * 0.00015;
        mesh.rotation.y = ti * 0.0002;
        mesh.rotation.z = ti * 0.00017;
      }
    });
  },
  methods: {
    color(i) {
      return this.cscale(i / this.n).css();
    },
  },
};
</script>

<style lang="scss" scoped>
.landing-ball {
  height: 20rem;
}
</style>
