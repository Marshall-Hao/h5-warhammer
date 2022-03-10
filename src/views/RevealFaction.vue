<template>
  <div class="reveal">
    <faction-fourtyk></faction-fourtyk>
  </div>
</template>

<script>
import FactionFourtyk from "../components/fourtykq/FactionFourtyk";

export default {
  name: "reveal-faction",
  components: {
    FactionFourtyk,
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
