<template>
  <div class="retake" @touchstart.prevent="retake">Retake the Journey</div>
</template>

<script>
export default {
  name: "share",
  methods: {
    retake() {
      this.$router.push({
        path: "/landing",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.retake {
  @include absCenter;
  font-size: 2rem;
}
</style>
