<template>
  <div class="q5">
    <div class="q5-title">Where would you want to call homebase?</div>
    <scene :scene="scene"></scene>
    <div class="q5-confirm" @touchstart.prevent="next">confirm</div>
    <ul class="q5-select">
      <li
        v-for="index in [1, 2, 3, 4, 5]"
        :key="index"
        :class="{ 'select-q': selected === index }"
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
    const selected = ref(1);
    // * store

    //  * computed

    //  * lifecycle
    //  * methods
    function changeScene(index) {
      scene.value = require(`@/assets/images/fourtyk/${index}.png`);
      selected.value = index;
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
      selected,
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
  &-title {
    @include absXCenter;
    font-size: 2rem;
    width: 100%;
    line-height: 3rem;
    top: 3rem;
  }
  &-confirm {
    @include absXCenter;
    bottom: 13rem;
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
.select-q {
  color: $color-text-py;
}
</style>
