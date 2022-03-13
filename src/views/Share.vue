<template>
  <div class="q6">
    <div
      class="q6-bg"
      :style="{
        backgroundImage: ` url(${faction && faction.bg_image})`,
      }"
    ></div>
    <section class="q6-section">
      <div class="q6-section-logo"></div>
      <h1 class="q6-section-name">{{ faction && faction.name }}</h1>
      <p class="q6-section-des">{{ faction && faction.short_desc }}</p>
      <h3 class="q6-section-title" v-if="subFactions">Sub Faction:</h3>
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide" v-for="sub in subFactions" :key="sub">
              <div
                class="q6-section-sub"
                :style="{
                  backgroundImage: ` url(${sub.image})`,
                }"
              ></div>
            </li>
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            <svg width="16.5" height="30" viewBox="0 0 110 200">
              <polyline
                points="100 0, 0 100, 100 200,110 190,25 100, 110 10 "
                fill="rgb(165, 147, 93)"
                stroke-linecap="round"
              >
                <animate
                  id="l41"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgb(255, 255, 255)"
                  to="rgb(165, 147, 93)"
                  dur="2s"
                  begin="0; l42.end"
                ></animate>
                <animate
                  id="l42"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgb(165, 147, 93)"
                  to="rgb(255, 255, 255)"
                  dur="2s"
                  begin="l41.end"
                ></animate>
              </polyline>
            </svg>
          </button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            <svg width="16.5" height="30" viewBox="0 0 110 200">
              <polyline
                points="10 200, 110 100, 10 0,0 10,85 100, 0 190 "
                fill="#64798B"
                stroke-linecap="round"
              >
                <animate
                  id="r41"
                  attributeName="fill"
                  attributeType="XML"
                  from="#fff"
                  to="#64798B"
                  dur="2s"
                  begin="0; r42.end"
                ></animate>
                <animate
                  id="r42"
                  attributeName="fill"
                  attributeType="XML"
                  from="#64798B"
                  to="#fff"
                  dur="2s"
                  begin="r41.end"
                ></animate>
              </polyline>
            </svg>
          </button>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0"></button>
          <button class="glide__bullet" data-glide-dir="=1"></button>
          <button class="glide__bullet" data-glide-dir="=2"></button>
        </div>
      </div>
      <div class="q6-section-func">
        <p>Retake Quiz</p>
        <p>Share Quiz</p>
      </div>
    </section>
    <!-- <div class="q6-packs">
      <h4 class="q6-packs-title">Starter Packs:</h4>
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li
              class="glide__slide"
              v-for="pack in faction && faction.products"
              :key="pack"
            >
              <div class="q6-packs-pack"></div>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { USER_KEY } from "../assets/js/constant";
import { useCookie } from "vue-cookie-next";
import useFaction from "../services/faction";
import { computed, onBeforeMount, onMounted, ref } from "vue";
import Glide from "@glidejs/glide";

export default {
  name: "share",
  setup() {
    // * api request
    const cookie = useCookie();
    const headers = cookie.getCookie(USER_KEY);
    const faction = ref("");
    // * computed
    const subFactions = computed(() => {
      return faction.value.sub_factions;
    });
    //  * lifecycle
    onBeforeMount(async () => {
      faction.value = await useFaction(headers);
      // factionBg.value = faction.bg_image;
      // factionLogo.value = faction.category.logo;
      // factionName = faction.name;
      // factionDescription = faction.short_desc;
      // factionProducts = faction.products;
      // subFaction = faction.sub_factions;
    });
    onMounted(() => {
      new Glide(".glide", {
        type: "carousel",
        startAt: 0,
        perView: 2,
      }).mount();
    });
    return {
      faction,
      subFactions,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
@import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";

.q6 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 1.2rem;
  overflow-y: scroll;
  font-family: "jingdian";
  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 60rem;
    width: 100%;
    background-size: cover;
    mask: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 10%, transparent 90%);
    z-index: -2;
  }
  &-section {
    width: 100%;
    border: 0.3rem solid rgba(255, 255, 255, 0.7);
    text-align: center;
    &-logo {
      width: 17rem;
      height: 4.8rem;
      background-image: url("../assets/images/regular/40,000SmallIcon.png");
      background-size: fit;
      background-repeat: no-repeat;
      margin: 1rem auto 38rem;
    }
    &-name {
      font-size: 4.2rem;
      font-weight: 400;
      color: $color-text-py;
      margin-bottom: 0.5rem;
    }
    &-des {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.8rem;
      margin: 0.5rem 0.6rem 3rem;
    }
    &-title {
      font-size: 1.6rem;
      font-weight: 400;
      color: $color-text-py;
      margin-bottom: 2rem;
    }
    &-func {
      display: flex;
      justify-content: space-between;
      color: $color-text-py;
      text-decoration: underline;
      margin: 3rem 5rem 1rem;
      font-size: 1.2rem;
      font-weight: 400;
    }
    &-sub {
      margin: auto;
      width: 12rem;
      height: 15.7rem;
      background-size: cover;
    }
  }
  &-packs {
    margin-top: 2rem;
    text-align: center;
    &-title {
      color: $color-text-py;
      font-size: 2rem;
    }
    &-pack {
      width: 31.5rem;
      height: 38.7rem;
      background: red;
    }
  }
}

.glide__slide {
  overflow: visible;
  // position: relative;
}
.glide__arrow {
  border: 0px;
  &--left {
    left: 1rem;
    animation: left 2s infinite forwards ease-in-out;
  }
  &--right {
    right: 0rem;
    animation: right 2s infinite backwards ease-in-out;
  }
}
@keyframes left {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-0.7rem);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes right {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(0.7rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
