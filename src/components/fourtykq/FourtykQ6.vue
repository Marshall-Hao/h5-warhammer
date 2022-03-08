<template></template>

<script>
export default {
  name: "fourtyk-q6",
  props: {
    currentQuestion: Object,
    questionBackground: Object,
    questionText: String,
    questionChoices: Array,
  },
  setup() {
    // * ref
    // * store

    //  * computed

    //  * lifecycle
    //  * methods
    //  * return
    return {};
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
}
</style>
