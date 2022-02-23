<template>
  <div class="q3">
    <div class="q3-section">
      <div class="q3-video">
        <video-box
          :lineColor="`rgb(67,80,102)`"
          :starColor="`rgb(25,30,79)`"
          :duration="`5`"
        ></video-box>
      </div>
      <h1 class="q3-title">这是一个比较长的标题</h1>
    </div>
  </div>
</template>

<script>
import VideoBox from "../base/video-box/VideoBox";

export default {
  name: "fourtyk-q3",
  components: {
    VideoBox,
  },
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
.q3 {
  &-section {
    width: 37rem;
    margin-top: 2rem;
    position: relative;
    @include absXCenter;
    text-align: center;
  }
  &-video {
    width: 37rem;
    margin-top: 3rem;
  }
  &-title {
    margin: 3rem 0;
    font-size: 3.3rem;
  }
}
</style>
