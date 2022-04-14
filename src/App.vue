<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <sound></sound>
</template>

<script>
import login from "./services/login";
// import ahoy from "./services/ahoy"
import { mapActions } from "vuex";
// console.log({ahoy})
import Sound from "./components/base/sounding/Sound";

export default {
  data() {
    return {};
  },
  components: {
    Sound,
  },
  mounted() {
    // const loginRes = await login();
    // console.log({loginRes})
    this.login();
  },
  methods: {
    async login() {
      const loginRes = await login();
      const list = {
        aos: loginRes["categories"]["aos"]["questions"],
        fourtyK: loginRes["categories"]["40k"]["questions"],
      };
      this.addQuestions(list);
      console.log(loginRes);
    },
    ...mapActions(["addQuestions"]),
  },
};
</script>

<style lang="scss">
#app {
  max-width: 414px;
}
</style>
