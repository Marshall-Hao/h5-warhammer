<template>
  <router-view v-slot="{ Component }">
    <transition appear name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss"></style>
