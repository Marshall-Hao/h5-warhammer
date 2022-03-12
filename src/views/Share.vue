<template>
  <div class="retake" @touchstart.prevent="retake">Retake the Quiz</div>
</template>

<script>
import faction from "../services/faction";
import { USER_KEY } from "../assets/js/constant";

export default {
  name: "share",
  methods: {
    retake() {
      this.$router.push({
        path: "/landing",
      });
    },
  },
  created() {
    const headers = this.$cookie.getCookie(USER_KEY);
    faction(headers);
  },
};
</script>

<style lang="scss" scoped>
.retake {
  @include absCenter;
  font-size: 2rem;
}
</style>
