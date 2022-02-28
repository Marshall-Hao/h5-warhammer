<template>
  <div class="q3">
    <div class="q3-background" :style="questionBackground"></div>
    <div class="q3-section">
      <div class="q3-section-video">
        <video-box
          :lineColor="`rgb(67,80,102)`"
          :starColor="`rgb(25,30,79)`"
          :duration="`5`"
          :width="360"
          :height="200"
          :posterUrl="`../../assets/images/map.png`"
        ></video-box>
      </div>
      <h1 class="q3-section-title">{{ questionText }}</h1>
      <div class="q3-section-choices">
        <div v-for="answer in questionChoices" :key="answer"></div>
      </div>
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
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: scroll;
  text-align: center;
  &-background {
    position: fixed;
    background-size: cover;
    height: 100%;
    width: 100%;
    z-index: -2;
  }
  &-section {
    width: 37rem;
    margin-top: 1rem;
    position: relative;
    @include absXCenter;
    text-align: center;
    &-video {
      width: 37rem;
      margin-top: 3rem;
      animation: backInDown 1s ease-in;
    }
    &-title {
      margin: 2rem 0;
      font-size: 3rem;
      animation: backInLeft 1s ease-in, pulse 3s ease-in-out infinite;
    }
  }
}
</style>
