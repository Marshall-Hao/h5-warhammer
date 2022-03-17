<template>
  <div>
    <section class="terms">
      <h2 class="terms-title">服务与条款</h2>
      <p id="terms-description"></p>
    </section>
  </div>
</template>

<script>
import useTyped from "../assets/js/use-typed";
import { TERMS } from "../assets/js/constant";

export default {
  name: "terms",
  mounted() {
    useTyped("#terms-description", [TERMS], 10, "......");
  },
};
</script>

<style lang="scss" scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(../assets/images/regular/homelanding.png);
  background-size: cover;
}
.terms {
  text-align: center;
  &-title {
    font-size: 5.2rem;
    color: $color-theme-y;
  }
}

#terms-description {
  padding: 1.5rem;
  font-size: $font-size-medium-x;
  text-indent: 2rem;
  line-height: 3rem;
}
</style>
