<template>
  <div class="q6">
    <!-- <div class="q6-sound" v-if="soundOn"><sound></sound></div> -->
    <div
      class="q6-bg"
      :style="{
        backgroundImage: ` url(${faction && faction.bg_image})`,
      }"
    ></div>
    <div class="q6-share" @click="quitShare">
      <div class="q6-share-before" @click.stop.prevent="quitPoster">
        <div class="q6-share-poster">
          <img
            class="q6-share-poster-logo"
            :src="faction && faction.category.logo"
          />
          <img class="q6-share-poster-bg" :src="faction && faction.bg_image" />
          <div class="q6-share-poster-des">
            <h1 class="q6-share-poster-name">
              {{ faction && faction.name }}
            </h1>
            <p class="q6-share-poster-details">
              {{ faction && faction.short_desc }}
            </p>
            <div class="q6-share-poster-end">
              <p class="q6-share-poster-intro">
                在战火纷飞的战锤世界，你将立身何处? <br />
                接受测试，揭晓你所属的阵营吧！
              </p>
              <img
                src="https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/barcode.png"
                alt="barcode"
              />
            </div>
          </div>
        </div>
        <p class="q6-share-before-between">海报生成中...</p>
        <p class="q6-share-before-intro">
          长按以保存海报 <br />
          点击灰色以退出
        </p>
      </div>

      <div class="q6-share-arrow" v-show="isWechat()">
        <div>
          <svg-icon
            prefix="war-"
            name="share"
            fill="white"
            stroke="white"
            :duration="{}"
          ></svg-icon>
        </div>
        <p>分享给微信好友</p>
      </div>

      <div class="q6-share-box">
        <div class="q6-share-logo">
          <svg-icon
            prefix="war-"
            name="hammer"
            fill="white"
            stroke="white"
            :duration="{}"
          ></svg-icon>
        </div>

        <div class="q6-share-details">
          <div class="q6-share-details-left">
            <p>分享至好友:</p>
            <div class="q6-share-details-icons">
              <div
                class="q6-share-details-icons-details"
                @touchstart.stop.prevent="weiboShare"
              >
                <div>
                  <svg-icon
                    prefix="war-"
                    name="weibo"
                    fill="white"
                    stroke="white"
                    :duration="{}"
                  ></svg-icon>
                </div>
                <p class="social">微博</p>
              </div>
              <div
                class="q6-share-details-icons-details"
                @touchstart.stop.prevent="posterDownload"
              >
                <div>
                  <svg-icon
                    prefix="war-"
                    name="download"
                    fill="white"
                    stroke="white"
                    :duration="{}"
                  ></svg-icon>
                </div>
                <p class="social">海报</p>
              </div>
            </div>
          </div>
          <div class="q6-share-details-right" @touchstart.stop="goTmall">
            <p>去旗舰店购买:</p>
            <div class="q6-share-details-right-icons">
              <div>
                <svg-icon
                  prefix="war-"
                  name="Tmall"
                  fill="white"
                  stroke="white"
                  :duration="{}"
                ></svg-icon>
              </div>
              <p>战锤旗舰店</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="q6-section">
      <div
        class="q6-section-logo"
        :style="{
          backgroundImage: ` url(${faction && faction.category.logo})`,
        }"
        id="top"
      ></div>
      <h1 class="q6-section-name">{{ faction && faction.name }}</h1>
      <p class="q6-section-des">{{ faction && faction.short_desc }}</p>

      <h3 class="q6-section-title" v-if="showSub">旗下阵营:</h3>
      <div v-else class="q6-section-sub-button q6-section-article-button">
        <a
          :href="faction && faction.article_url"
          target="_blank"
          @click.stop.prevent="goToArticle"
        >
          <button
            :data-href="faction && faction.article_url"
            :data-name="faction && faction.name_en"
          >
            了解更多
          </button>
        </a>
      </div>
      <div v-if="showSub" class="glide q6-section-glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li
              class="glide__slide"
              style="display: flex; flex-direction: column"
              v-for="sub in subFactions"
              :key="sub"
            >
              <div
                class="q6-section-sub"
                :style="{
                  backgroundImage: ` url(${sub.image})`,
                }"
              ></div>
              <div class="q6-section-subtitle">
                {{ sub.name }}
              </div>
              <div class="q6-section-sub-desc">
                {{ sub.short_desc }}
              </div>
              <div
                class="q6-section-sub-button"
                @click.stop.prevent="goToArticle"
              >
                <a :href="sub.article_url" target="_blank" :name="sub.name_en">
                  <button :data-href="sub.article_url" :data-name="sub.name_en">
                    了解更多
                  </button>
                </a>
              </div>
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
        <p @touchstart.prevent="retake">重做测试</p>
        <p @touchstart.prevent="share">分享测试</p>
      </div>
    </section>
    <div class="q6-packs">
      <div class="q6-bottom"></div>
      <h4 class="q6-packs-title">{{ productTitle }}</h4>
      <div class="glide2 q6-packs-glide2">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li
              class="glide__slide"
              v-for="(product, index) in factionProducts"
              :key="index"
            >
              <div class="q6-product">
                <div class="q6-product-container">
                  <div
                    class="q6-product-container-image"
                    :style="{
                      backgroundImage: ` url(${product.image})`,
                    }"
                  ></div>
                  <div class="q6-product-container-title">
                    {{ product.name }}
                  </div>
                  <div class="q6-product-container-desc">
                    {{ product.short_desc }}
                  </div>
                  <!-- <a :href="product.shop_url" class="q6-product-container-btn"> -->
                  <a
                    @touchstart.prevent="goToProduct"
                    :data-href="product.shop_url"
                    :data-name="product.name"
                    class="q6-product-container-btn"
                  >
                    <span>前往购买</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="glide__bullets" data-glide-el="controls[nav]">
          <button
            v-for="(product, index) in factionProducts"
            :key="index"
            class="glide__bullet"
            :data-glide-dir="`=${index}`"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { USER_KEY } from "../assets/js/constant";
import { useCookie } from "vue-cookie-next";
import useFaction from "../services/faction";
import { computed, onBeforeMount, onMounted, onUpdated, ref, watch } from "vue";
import Glide from "@glidejs/glide";
import { useRouter } from "vue-router";
import ahoy from "../services/ahoy";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import SvgIcon from "../components/base/svgIcon/SvgIcon";
// import Sound from "../components/base/sounding/Sound";
import posterGenerator from "../assets/js/toCanvas";
import { disableBack } from "../assets/js/util.js";

gsap.registerPlugin(ScrollToPlugin);

export default {
  name: "share",
  components: {
    SvgIcon,
  },
  setup() {
    disableBack(window.location.href);
    // * api request
    const cookie = useCookie();
    const headers = cookie.getCookie(USER_KEY);
    // *router
    const router = useRouter();
    // *ref
    const faction = ref("");
    // const soundOn = ref(true);
    // * computed
    const subFactions = computed(() => {
      return faction.value && faction.value.sub_factions;
    });
    const factionProducts = computed(() => {
      return faction.value && faction.value.products;
    });
    const factionLogo = computed(() => {
      if (faction.value && faction.value.category.name === "AOS") {
        return {
          // backgroundImage: `url(${require("../assets/images/regular/sigMarSmallIcon.png")})`,
          backgroundImage:
            "url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/sigMarSmallIcon.png)",
        };
      } else {
        return {
          // backgroundImage: `url(${require("../assets/images/regular/40,000SmallIcon.png")})`,
          backgroundImage:
            "url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/40%2C000SmallIcon.png)",
        };
      }
    });
    const productTitle = computed(() => {
      if (faction.value && faction.value.category.name === "AOS") {
        return "《战锤:西格玛时代》新手套装";
      } else {
        return "《战锤40000》新手套装";
      }
    });
    const showSub = computed(() => {
      if (subFactions.value && subFactions.value.length === 0) {
        return false;
      } else {
        return true;
      }
    });
    // * watch
    watch(faction, (newFaction) => {});
    //  * lifecycle
    onMounted(() => {
      // faction.value = await useFaction(headers);
      // await new Glide(".glide2", {
      //   type: "carousel",
      //   swipeThreshold: 10,
      //   startAt: 0,
      //   perView: 1,
      // }).mount();
      const factionPromise = new Promise(async (resolve) => {
        faction.value = await useFaction(headers);
        resolve();
      });
      factionPromise.then(() => {
        new Glide(".glide2", {
          type: "carousel",
          swipeThreshold: 10,
          startAt: 0,
          perView: 1,
        }).mount();

        if (showSub.value) {
          new Glide(".glide", {
            type: "carousel",
            swipeThreshold: 10,
            startAt: 0,
            perView: 2,
          }).mount();
        }
      });
      // Promise.resolve()
      //   .then(() => {
      //     faction.value = useFaction(headers);
      //   })
      //   .then(() => {
      //     new Glide(".glide2", {
      //       type: "carousel",
      //       swipeThreshold: 10,
      //       startAt: 0,
      //       perView: 1,
      //     }).mount();
      //   });
      // ahoy.track("Completed Quiz", {
      //   category: faction.value.category.name,
      //   faction: faction.value.name_en,
      //   faction_cn: faction.value.name
      // })
    });
    onUpdated(() => {
      const dim = { w: 1, h: window.innerHeight / window.innerWidth };
      // console.log({dim})
      const subDescs = document.querySelectorAll(".q6-section-sub-desc");
      // console.log({subDescs})
      subDescs.forEach((x) => {
        if (dim.h < 2.1) {
          // console.log('h < 2.1?')
          x.style.padding = `0 2.5rem`;
        } else {
          // console.log('dim.h', dim.h)
        }
      });
    });
    // * methods
    function retake() {
      console.log({ faction });
      ahoy.track("Clicked Retake Quiz", {
        category: faction.value.category.name,
        faction: faction.value.name_en,
        faction_cn: faction.value.name,
      });
      router.push({
        path: "/choose",
      });
    }
    function share() {
      // * share
      gsap
        .timeline()
        .to(".q6", {
          duration: 1,
          scrollTo: 0,
          // overflowY: "hidden",
          ease: "",
        })
        .to(".q6-share", {
          display: "block",
          opacity: 1,
          duration: 1,
        })
        .from(
          ".q6-share-box",
          {
            translateY: "130%",
            duration: 1,
          },
          "<"
        );

      // * ahoy
      ahoy.track("Clicked Share Quiz", {
        category: faction.value.category.name,
        faction: faction.value.name_en,
        faction_cn: faction.value.name,
      });
    }
    function goToProduct(e) {
      console.log("goToProduct", e.currentTarget.dataset);
      const dataset = e.currentTarget.dataset;
      ahoy.track("Clicked Buy Product", {
        item_name: dataset.name,
        item_url: dataset.href,
        category: faction.value.category.name,
        faction: faction.value.name_en,
        faction_cn: faction.value.name,
      });
      // and then go to product, Marshall please test 👇 test pass
      if (dataset.href) {
        window.location.href = dataset.href;
        // window.open(dataset.href, "_blank");
      }
    }
    function goToArticle(e) {
      // console.log('goToProduct', e.currentTarget.dataset)
      const dataset = e.target.dataset;
      console.log(dataset.name, dataset.href);

      ahoy.track("Clicked Sub-faction Article", {
        item_name: dataset.name,
        item_url: dataset.href,
        category: faction.value.category.name,
        faction: faction.value.name_en,
        faction_cn: faction.value.name,
      });
      // and then go to product, Marshall please test 👇 test pass
      if (dataset.href) {
        window.location.href = dataset.href;
        // window.open(dataset.href, "_blank");
      }
    }
    function quitShare() {
      gsap
        .timeline()
        .to(".q6-share", {
          opacity: 0,
          display: "none",
          duration: 1,
        })
        .to(".q6", {
          duration: 0,
          overflowY: "scroll",
        });
    }

    function goTmall() {
      // TODO: Ahoy
      ahoy.track("Clicked Visit Tmall Shop", {
        category: faction.value.category.name,
        faction: faction.value.name_en,
        faction_cn: faction.value.name,
      });
      // window.open("https://warhammer.tmall.com/", "_blank");
      window.location.href =
        "https://shop.m.taobao.com/shop/sr.htm?p=CWZsKMQ_BiDbx_0_mntcQ";
    }

    function weiboShare() {
      // TODO: Ahoy
      ahoy.track("Clicked Share to Weibo", {
        category: faction.value.category.name,
        faction: faction.value.name_en,
        faction_cn: faction.value.name,
      });

      const title =
        "我的%23战锤%23阵营竟然是它！快来测测你的阵营是哪个？看我们在战锤世界还能不能做朋友了！%23战锤40k%23战锤西格玛时代%23";
      const url =
        "https://h5.games-workshop-china.com?utm_medium=social&utm_source=weibo";
      const photo = faction.value.bg_image;
      window.location.href =
        "http://service.weibo.com/share/share.php?url=" +
        url +
        "&title=" +
        title +
        "&pic=" +
        photo;
    }

    function posterDownload() {
      // soundOn.value = false;
      // TODO:Ahoy
      ahoy.track("Clicked Download Poster", {
        category: faction.value.category.name,
        faction: faction.value.name_en,
        faction_cn: faction.value.name,
      });

      // TODO: generate poster
      gsap
        .timeline()
        .to(".q6-share-box", {
          opacity: 0,
          display: "none",
          onStart: () => {
            posterGenerator(".q6-share-poster");
          },
        })
        .fromTo(
          ".q6-share-before",
          {
            display: "block",
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.5,
          }
        );
    }

    function quitPoster() {
      // soundOn.value = true;
      document.querySelector(".newposter").remove();
      gsap
        .timeline()
        .to(".q6-share-before", {
          opacity: 0,
          display: "none",
        })
        .to(".q6-share-box", {
          duration: 1,
          opacity: 1,
          display: "block",
        });
    }

    // let timeout = null;
    // function longPressPoster() {
    //   timeout = setTimeout(() => {
    //     posterGenerator(".q6-share-poster");
    //   }, 800);
    //   // posterGenerator(".q6-share-poster");
    // }

    // function quitPoster() {
    //   clearTimeout(timeout);
    // }

    function isWechat() {
      return /MicroMessenger/i.test(window.navigator.userAgent);
    }
    return {
      faction,
      subFactions,
      factionProducts,
      factionLogo,
      productTitle,
      showSub,
      // soundOn,
      retake,
      share,
      goToProduct,
      goToArticle,
      quitShare,
      goTmall,
      weiboShare,
      posterDownload,
      quitPoster,
      isWechat,
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
  overflow-x: hidden;
  font-family: "jingdian", "jingdian2";
  font-weight: 400;
  &-sound {
    position: fixed;
    right: 7%;
    top: 5%;
    z-index: 6;
  }
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
  &-share {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    background: linear-gradient(0deg, #222222 34%, transparent 100%);
    opacity: 0;
    width: 100%;
    height: 100%;

    // bottom: 0vh;
    z-index: 3;
    padding: 0 2rem;
    &-before {
      top: 0;
      left: 0;
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(34, 34, 34, 0.9);
      display: none;
      z-index: 10;
      &-intro {
        @include absXCenter;
        bottom: 4%;
        font-size: 1.6rem;
        letter-spacing: 0.2rem;
        line-height: 1.8rem;
      }
      &-between {
        @include absCenter;
        font-size: 1.6rem;
        letter-spacing: 0.2rem;
      }
    }
    &-poster {
      @include absCenter;
      transform: translateY(-200%);
      width: 38.2rem;
      height: 54rem;
      display: flex;
      flex-direction: column;
      // background: red;
      justify-content: space-between;
      padding-bottom: 2rem;
      background: linear-gradient(0, #222222 25%, transparent 88%);
      &::before {
        content: "";
        position: absolute;
        top: 0rem;
        bottom: 0rem;
        left: 0rem;
        right: 0rem;
        background: linear-gradient(0, #222222 20%, transparent 45%);
        z-index: -1;
      }
      &::after {
        content: "";
        position: absolute;
        top: 0.8rem;
        bottom: 0.8rem;
        left: 0.8rem;
        right: 0.8rem;
        border: 0.3rem solid rgba(255, 255, 255, 0.7);
        // background: linear-gradient(0, #222222 25%, transparent 88%);
      }
      &-logo {
        width: 16rem;
        height: 4.3rem;

        margin: 1rem auto 0;
        object-fit: cover;
      }
      &-bg {
        position: absolute;
        top: 0;

        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: -2;
      }
      &-des {
        // @include absXCenter;
        margin: 0 auto;
        // justify-self: flex-end;
        width: 100%;
        padding: 0 2rem;
        z-index: 7;
      }
      &-name {
        text-align: center;
        font-size: 4.2rem;
        font-weight: 400;

        color: $color-text-py;
        margin-bottom: 1rem;
      }
      &-details {
        text-align: justify;
        width: 100%;
        font-size: 1.2rem;

        line-height: 1.9rem;
      }
      &-end {
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        img {
          height: 6.8rem;
          width: 6.8rem;
          object-fit: cover;
          border: 0.1rem solid $color-text-py;
        }
      }
      &-intro {
        font-size: 1.2rem;
        line-height: 1.9rem;
        color: #b3584d;
      }
    }
    &-arrow {
      position: absolute;
      right: 3rem;
      top: 2rem;
      width: 100%;
      z-index: 1;
      div {
        position: absolute;
        right: 0;
        height: 10rem;
        width: 10rem;
        transform: rotateZ(-5deg);
      }
      p {
        position: absolute;
        right: 0;
        top: 12rem;
        font-size: 2.6rem;
        // font-family: Heiti SC, STHeiti, SimHei;
      }
    }
    &-logo {
      background: #222222;
      position: absolute;
      left: 50%;
      top: 0%;
      height: 5rem;
      width: 5rem;
      transform: translate(-50%, -50%);
      z-index: 4;
    }
    &-box {
      position: absolute;
      width: 91.5%;
      height: 28%;
      border: 0.1rem solid #bc3f2f;
      bottom: 1%;
      padding: 5rem 4rem;

      &::after {
        content: "";
        position: absolute;
        top: 3px;
        bottom: 3px;
        left: 3px;
        right: 3px;
        border: 0.1rem solid #bc3f2f;
        // width: 96.5%;
        // height: 95%;
      }
    }
    &-details {
      // height: 100%;
      width: 33rem;
      @include absCenter;
      display: flex;
      justify-content: space-between;
      text-align: center;
      z-index: 5;
      // gap: 10rem;
      p {
        color: $color-text-py;
        font-size: 1.4rem;
        // font-family: Heiti SC, STHeiti, SimHei;
        margin-bottom: 3rem;
      }
      &-icons {
        display: flex;
        justify-content: space-between;

        // gap: 4.5rem;
        &-details:nth-child(1) {
          margin-right: 4.5rem;
        }
        &-details {
          div {
            position: relative;
            height: 4rem;
            width: 4rem;
            margin-bottom: 2rem;
          }
          p {
            color: white !important;
            margin-bottom: 0 !important;
          }
        }
      }
      &-left {
      }
      &-right {
        width: 33%;
        &-icons {
          div {
            position: relative;
            height: 5rem;
            width: 5rem;
            margin: 0 auto 1rem;
          }
          p {
            color: white !important;
            margin-bottom: 0 !important;
          }
        }
      }
    }
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
      font-weight: 400;
      color: $color-text-py;
      margin-bottom: 0.5rem;
    }
    &-des {
      font-size: 1.5rem;

      line-height: 2rem;
      // margin: 0.5rem 0.6rem 3rem;
      margin: 1rem 1.6rem 3rem;
    }
    &-title {
      font-size: 1.6rem;

      color: $color-text-py;
      margin-bottom: 2rem;
    }
    &-article-button {
      width: 10rem;
      padding: 0 !important;
      margin: 0 auto;
    }
    &-glide {
      width: 85%;
      margin: auto;
    }
    &-func {
      display: flex;
      justify-content: space-around;
      color: $color-text-py;
      text-decoration: underline;
      // margin: 3rem 6.5rem 1rem;
      // margin: 3rem 6.5rem;
      width: 85%;
      margin: 3rem auto;
      // padding: 0 2.5rem;
      // font-size: 1.2rem;
      font-size: 1.7rem;
      p {
        width: 100%;
        text-align: center;
      }
    }
    &-sub {
      // margin: 0rem 2.2rem 2rem;
      margin-bottom: 2rem;
      align-self: center;
      justify-self: center;
      // width: 12rem;
      // height: 15.7rem;
      width: 100%;
      height: 22rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      font-size: 1.6rem;
      animation: pulse 2s infinite forwards;
      &-desc {
        text-align: justify;
        color: #fff;
        font-size: 1.2rem;
        line-height: 2rem;
        padding: 0rem 3rem;
        box-sizing: border-box;
        // min-height: 12rem;
        height: 12rem;
        @media screen and (max-width: 400px) {
          height: 11rem;
        }
        // overflow: hidden;
      }
      &-button {
        margin-top: 1rem;
        padding: 0.5rem 3rem;
        box-sizing: border-box;
        button {
          font-family: "jingdian";
          font-size: 1.7rem;
          width: 100%;
          padding: 0.6rem 0.5rem;
          box-sizing: border-box;
          background-color: #bc3f2f;
          color: #fff;
          border: 0;
        }
      }
    }
    &-subtitle {
      color: $color-sub-theme;
      margin-bottom: 1rem;
      font-size: 1.825rem;
      text-transform: uppercase;
      min-height: 3.5rem;
    }
    &-about {
      font-size: 1.5rem;
    }
  }
  &-bottom {
    background-image: url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/homelanding.png);
    background-size: cover;
    position: absolute;
    top: -3rem;
    left: -2rem;
    height: 115%;
    width: 120%;
    z-index: -1;
    mask: linear-gradient(0, #222222 5%, #222222 5%, transparent 100%);
  }
  &-packs {
    // margin-top: 2rem;
    margin: 2rem 0;
    text-align: center;
    position: relative;

    // div {
    //   background-size: cover;
    // }
    &-title {
      color: $color-text-py;
      font-size: 2rem;
      margin: 4rem 0 -2rem;
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
        mix-blend-mode: multiply;
      }
      // a
      &-title {
        color: $color-text-pr;
        font-size: 1.6rem;
        font-weight: 700;
        @include absCenter;
        margin-top: 3.5rem;
        // font-family: Heiti SC, STHeiti, SimHei;
        // width: 21rem;
        width: 100%;
        text-align: center;
      }
      &-desc {
        width: 100%;
        color: #000;
        @include absCenter;
        font-size: 1.375rem;
        line-height: 1.9rem;
        // font-family: Heiti SC, STHeiti, SimHei;
        color: #fff;
        // margin-top: 10rem;
        margin-top: 9.5rem;
      }
      &-btn {
        @include absCenter;
        width: 16rem;
        height: 3.314rem;
        background-image: url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/button_yellow.png);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: 17rem;
        // padding-top: 0.25rem;
        color: $color-background;
        // font-family: Heiti SC, STHeiti, SimHei;
        font-size: 2rem;
        font-weight: 200;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

.newposter {
  @include absCenter;

  width: 38.2rem;
  height: 54rem;
}

.glide__slide {
  overflow: visible;
  // position: relative;
}
.glide__arrow {
  border: 0px;
  &--left {
    left: -3rem;
    animation: left 2s infinite forwards ease-in-out;
  }
  &--right {
    right: -3rem;
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
