<template>
  <div class="reveal">
    <faction-fourtyk v-if="is40k"></faction-fourtyk>
    <faction-aos v-else></faction-aos>
    <!-- <div v-else>aos</div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import FactionFourtyk from "../components/fourtykq/FactionFourtyk";
import FactionAos from "../components/aosq/FactionAos";
import { useRouter } from "vue-router";
import { onBeforeUnmount } from "vue";
import storage from "good-storage";
import { USER_KEY } from "../assets/js/constant";
import { useCookie } from "vue-cookie-next";
import useFaction from "../services/faction";
import ahoy from "../services/ahoy";

export default {
  name: "reveal-faction",
  components: {
    FactionFourtyk,
    FactionAos,
  },
  computed: {
    is40k() {
      return this.category === "40k";
    },
    ...mapState(["category"]),
  },
  setup() {
    const router = useRouter();
    onBeforeUnmount(async () => {
      const currentQuiz = storage.session.get("__currentquiz__");
      if (currentQuiz === 7) {
        router.push({
          path: `/share`,
        });
      }
      const faction = await useFaction(headers);
      ahoy.track("Completed Quiz", {
        category: faction.category.name,
        faction: faction.name_en,
        faction_cn: faction.name
      })
    });

    const cookie = useCookie();
    const headers = cookie.getCookie(USER_KEY);
    // useFaction(headers);
  },
};
</script>

<style lang="scss" scoped>
.reveal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
}
</style>
