<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  max-width: 414px;
}
</style>
