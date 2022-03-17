<template>
  <div class="q6">
    <div
      class="q6-bg"
      :style="{
        backgroundImage: ` url(${faction && faction.bg_image})`,
      }"
    ></div>
    <section class="q6-section">
      <div class="q6-section-logo" :style="factionLogo"></div>
      <h1 class="q6-section-name">{{ faction && faction.name }}</h1>
      <p class="q6-section-des">{{ faction && faction.short_desc }}</p>
      <h3 class="q6-section-title" v-if="showSub">关于我的团:</h3>
      <div v-if="showSub" class="glide q6-section-glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide" style="display: flex; flex-direction: column;" v-for="sub in subFactions" :key="sub">
              <div
                class="q6-section-sub"
                :style="{
                  backgroundImage: ` url(${sub.image})`,
                }"
              ></div>
              <div class="q6-section-subtitle">
                {{ sub.name }}
              </div>
              <div class="q6-section-about">关于</div>
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
      </div>
      <div class="q6-section-func">
        <p @touchstart.prevent="retake">Retake Quiz</p>
        <p>Share Quiz</p>
      </div>
    </section>
    <div class="q6-packs">
      <h4 class="q6-packs-title">Starter Packs:</h4>
      <div class="glide2 q6-packs-glide2">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li
              class="glide__slide"
              v-for="product in factionProducts"
              :key="product"
            >
              <div class="q6-product">
                <div class="q6-product-container">
                  <div
                    class="q6-product-container-image"
                    :style="{
                      backgroundImage: ` url(${product.image})`,
                    }"
                  ></div>
                  <!-- <a :href="product.shop_url">{{ product.name }}</a> -->
                  <div class="q6-product-container-title">{{ product.name }}</div>
                  <div class="q6-product-container-desc">
                    {{ product.short_desc }}
                  </div>
                  <a :href="product.shop_url" class="q6-product-container-btn">
                    <span>BUY NOW</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0"></button>
          <button class="glide__bullet" data-glide-dir="=1"></button>
          <button class="glide__bullet" data-glide-dir="=2"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { USER_KEY } from "../assets/js/constant";
import { useCookie } from "vue-cookie-next";
import useFaction from "../services/faction";
import { computed, onBeforeMount, onMounted, onUpdated, ref } from "vue";
import Glide from "@glidejs/glide";
import { useRouter } from "vue-router";

export default {
  name: "share",
  setup() {
    // * api request
    const cookie = useCookie();
    const headers = cookie.getCookie(USER_KEY);
    // *router
    const router = useRouter();
    // *ref
    const faction = ref("");
    // * computed
    const subFactions = computed(() => {
      return faction.value.sub_factions;
    });
    const factionProducts = computed(() => {
      return faction.value.products;
    });
    const factionLogo = computed(() => {
      if (faction.value && faction.value.category.name === "AOS") {
        return {
          backgroundImage: `url(${require("../assets/images/regular/sigMarSmallIcon.png")})`,
        };
      } else {
        return {
          backgroundImage: `url(${require("../assets/images/regular/40,000SmallIcon.png")})`,
        };
      }
    });
    const showSub = computed(() => {
      if (subFactions.value && subFactions.value.length === 0) {
        return false;
      } else {
        return true;
      }
    });
    //  * lifecycle
    onBeforeMount(async () => {
      faction.value = await useFaction(headers);
    });
    onUpdated(() => {
      if (showSub.value) {
        new Glide(".glide", {
          type: "carousel",
          startAt: 0,
          perView: 2,
        }).mount();
        new Glide(".glide2", {
          type: "carousel",
          startAt: 0,
          perView: 1,
        }).mount();
      }
    });
    // * methods
    function retake() {
      router.push({
        path: "/choose",
      });
    }
    return {
      faction,
      subFactions,
      factionProducts,
      factionLogo,
      showSub,
      retake,
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
  font-weight: 400;
  &-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 60rem;
    width: 100%;
    background-size: cover;
    mask: linear-gradient(180deg, #222222 25%, #222222 50%, transparent 90%);
    z-index: -2;
  }
  &-section {
    width: 100%;
    border: 0.3rem solid rgba(255, 255, 255, 0.7);
    text-align: center;

    &-logo {
      width: 18rem;
      height: 4.8rem;
      background-size: cover;
      background-repeat: no-repeat;
      margin: 1rem auto 38rem;
    }
    &-name {
      font-size: 4.2rem;

      color: $color-text-py;
      margin-bottom: 0.5rem;
    }
    &-des {
      font-size: 1.4rem;

      line-height: 1.8rem;
      // margin: 0.5rem 0.6rem 3rem;
      margin: 0.5rem 1.6rem 3rem;
    }
    &-title {
      font-size: 1.6rem;

      color: $color-text-py;
      margin-bottom: 2rem;
    }
    &-glide {
      width: 85%;
      margin: auto;
    }
    &-func {
      display: flex;
      justify-content: space-between;
      color: $color-text-py;
      text-decoration: underline;
      // margin: 3rem 6.5rem 1rem;
      margin: 3rem 6.5rem;
      // font-size: 1.2rem;
      font-size: 1.5rem;
    }
    &-sub {
      // margin: 0rem 2.2rem 2rem;
      margin-bottom: 2rem;
      align-self: center; justify-self: center;
      width: 12rem;
      height: 15.7rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      font-size: 1.6rem;
      animation: pulse 2s infinite forwards;
    }
    &-subtitle {
      color: $color-sub-theme;
      margin-bottom: 1rem;
      font-size: 1.825rem;
      text-transform: uppercase;
    }
    &-about {
      font-size: 1.5rem;
    }
  }
  &-packs {
    // margin-top: 2rem;
    margin: 2rem 0;
    text-align: center;
    position: relative;
    &-title {
      color: $color-text-py;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    &-glide2 {
      width: 31.5rem;
      margin: auto;
    }
  }
  &-product {
    width: 31.5rem;
    // height: 28.7rem;
    height: 37.7rem;
    // background: #fff;
    // border-radius: 0.7rem;
    // margin-bottom: 2rem;
    margin-bottom: 3rem;
    position: relative;
    &-container {
      // border: 0.15rem solid #000;
      height: 97%;
      width: 97%;
      @include absCenter;
      border-radius: 0.7rem;
      &-image {
        width: 17.5rem;
        height: 15.9rem;
        background-size: cover;
        @include absXCenter;
        margin: 2rem 0;
      }
      // a
      &-title {
        color: $color-text-pr;
        font-size: 1.6rem;
        font-weight: 700;
        @include absCenter;
        margin-top: 3.5rem;
        font-family: Heiti SC, STHeiti, SimHei;
        // width: 21rem;
        width: 100%;
        text-align: center;
      }
      &-desc {
        width: 100%;
        color: #000;
        @include absCenter;
        font-size: 1.325rem;
        line-height: 1.8rem;
        font-family: Heiti SC, STHeiti, SimHei;
        color: #fff;
        // margin-top: 10rem;
        margin-top: 9.5rem;
      }
      &-btn {
        @include absCenter;
        width: 16rem;
        height: 3.314rem;
        background-image: url('../assets/images/misc/button_yellow.png');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: 17rem;
        // padding-top: 0.25rem;
        color: #000;
        font-family: Heiti SC, STHeiti, SimHei;
        font-size: 2rem; font-weight: 700;
        display: flex;
        justify-content: center; align-items: center;
      }
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
    left: -2rem;
    animation: left 2s infinite forwards ease-in-out;
  }
  &--right {
    right: -2.5rem;
    animation: right 2s infinite backwards ease-in-out;
  }
}

.glide__bullets {
  bottom: 0rem;
}

.glide__bullet {
  height: 0.5rem;
  width: 0.5rem;
  &--active {
    background-color: $color-text-py;
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
