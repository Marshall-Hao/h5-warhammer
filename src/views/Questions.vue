<template>
  <div class="question">
    <div class="question-sound">
      <switch-sound></switch-sound>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import SwitchSound from "../components/base/switch/SwitchSound";
import { mapMutations } from "vuex";

export default {
  name: "question",
  components: {
    SwitchSound,
  },
  beforeUnmount() {
    this.noPlay();
  },
  methods: {
    ...mapMutations(["noPlay"]),
  },
};
</script>

<style lang="scss" scoped>
.question-sound {
  position: absolute;
  right: 1.3rem;
  top: 6.5%;
}
</style>
