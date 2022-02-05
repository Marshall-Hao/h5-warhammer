<template>
  <section class="terms">
    <h2 class="terms-title">服务与条款</h2>
    <p id="terms-description"></p>
  </section>
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
