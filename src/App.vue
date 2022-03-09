<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
  import login from "./services/login";
  import ahoy from "./services/ahoy"
  console.log({ahoy})

  export default {
    data() {
      return {

      }
    },
    async mounted() {
      const loginRes = await login();
      console.log({loginRes})
    }
  }
</script>

<style lang="scss"></style>
