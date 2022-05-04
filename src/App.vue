<template>
  <div v-if="!mobile">
    <DesktopLanding />
  </div>
  <router-view v-slot="{ Component }" v-else>
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <sound></sound>
</template>

<script>
import login from "./services/login";
import ahoy from "./services/ahoy"
import { mapActions } from "vuex";
// console.log({ahoy})
import Sound from "./components/base/sounding/Sound";
import DesktopLanding from "./views/DesktopLanding";
import { detectMob } from "./assets/js/util";

export default {
  data() {
    return {
      mobile: true
    };
  },
  components: {
    Sound, DesktopLanding
  },
  mounted() {
    console.log(111, detectMob())
    this.mobile = detectMob()
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
