<template>
  <div class="q5">
    <scene :scene="scene"></scene>
    <div class="q5-confirm" @touchstart.prevent="next">确定</div>
    <ul class="q5-select">
      <li
        v-for="index in [1, 2, 3]"
        :key="index"
        @touchstart.prevent="changeScene(index)"
      >
        {{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Scene from "../base/scene/ Scene.vue";

export default {
  name: "fourtyk-q5",
  components: {
    Scene,
  },
  props: {
    currentQuestion: Object,
    questionBackground: Object,
    questionText: String,
    questionChoices: Array,
  },
  setup() {
    const router = useRouter();
    // * ref
    const scene = ref(require("@/assets/images/fourtyk/1.png"));
    // * store

    //  * computed

    //  * lifecycle
    //  * methods
    function changeScene(index) {
      scene.value = require(`@/assets/images/fourtyk/${index}.png`);
    }
    function next() {
      router.push({
        path: "/questions/40k/6",
      });
    }
    //  * return
    return {
      changeScene,
      next,
      scene,
    };
  },
};
</script>

<style lang="scss" scoped>
.q5 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  &-confirm {
    @include absXCenter;
    bottom: 10rem;
    font-size: 4rem;
  }
  &-select {
    @include absXCenter;
    bottom: 3rem;
    display: flex;
    justify-content: space-between;
    width: 20rem;
    font-size: 3rem;
  }
}
</style>
