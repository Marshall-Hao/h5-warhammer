<template>
  <div class="reveal">
    <faction-fourtyk v-if="is40k"></faction-fourtyk>
    <faction-aos v-else></faction-aos>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FactionFourtyk from "../components/fourtykq/FactionFourtyk";
import FactionAos from "../components/aosq/FactionAos";
export default {
  name: "reveal-faction",
  components: {
    FactionFourtyk,
    FactionAos,
  },
  computed: {
    is40k() {
      console.log(this.category);
      return this.category === "40k";
    },
    ...mapState(["category"]),
  },
};
</script>

<style lang="scss" scoped>
.reveal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
}
</style>
