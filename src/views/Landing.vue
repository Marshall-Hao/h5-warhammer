<template>
  <div class="landing fixed-no-scroll">
    <header class="landing-header">
      <div class="landing-header-sound">
        <switch-sound></switch-sound>
      </div>
      <div class="landing-header-icon">
        <svg-icon
          :name="`hammer`"
          :prefix="`war-`"
          fill="#FFFFFF"
          :stroke="`#FFFFFF`"
          :duration="{}"
        ></svg-icon>
      </div>
      <div class="landing-header-title">
        <!-- Enter the Worlds of<br />
        Warhammer -->
        进入战锤的世界
      </div>
    </header>

    <section class="landing-section">
      <div class="landing-section-video" @click.prevent="stopMusic">
        <video
          controls
          playsinline
          loop
          src="https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/intro_video.mp4"
          poster="https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/vidPoster.png"
        ></video>
      </div>

      <div class="landing-section-description">
        <span id="landing-section-typed">
          硝烟弥漫，战事绵延。不论是魔法涌动的凡世诸域,<br />
          还是荒蛮绝望的广阔宇宙，列国的纷争从未停息。
        </span>
      </div>

      <div class="landing-section-begin" @click="onClick">
        <img
          src="https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/pulsing_orb.gif"
          alt="orb"
        />
      </div>
      <div class="landing-section-intro">
        <div>
          <svg width="11" height="20" viewBox="0 0 110 200">
            <polyline
              points="100 0, 0 100, 100 200,110 190,25 100, 110 10 "
              fill="rgb(255, 255, 255)"
              stroke-linecap="round"
              transform-origin="55 100"
              transform="rotate(90)"
            >
              <animate
                id="l41"
                attributeName="fill"
                attributeType="XML"
                from="rgb(255, 255, 255,0.9)"
                to="rgb(255, 255, 255)"
                dur="2s"
                begin="0; l42.end"
              ></animate>
              <animate
                id="l42"
                attributeName="fill"
                attributeType="XML"
                from="rgb(255, 255, 255)"
                to="rgb(255, 255, 255,0.9)"
                dur="2s"
                begin="l41.end"
              ></animate>
            </polyline>
          </svg>
          <svg width="11" height="20" viewBox="0 0 110 200">
            <polyline
              points="100 0, 0 100, 100 200,110 190,25 100, 110 10 "
              fill="rgb(255, 255, 255)"
              stroke-linecap="round"
              transform-origin="55 100"
              transform="rotate(90)"
            >
              <animate
                id="l41"
                attributeName="fill"
                attributeType="XML"
                from="rgb(255, 255, 255,0.9)"
                to="rgb(255, 255, 255)"
                dur="2s"
                begin="0; l42.end"
              ></animate>
              <animate
                id="l42"
                attributeName="fill"
                attributeType="XML"
                from="rgb(255, 255, 255)"
                to="rgb(255, 255, 255,0.9)"
                dur="2s"
                begin="l41.end"
              ></animate>
            </polyline>
          </svg>
        </div>

        <p class="landing-section-intro-desc">
          在全新的战锤世界，你将立身何处?<br />
          点击揭晓你的命运吧!
        </p>
      </div>
    </section>
    <footer class="landing-footer">
      <router-link class="landing-footer-terms" :to="`/terms`"
        >服务与条款</router-link
      >
      <p class="landing-footer-beian">沪ICP备17004107号-1</p>
    </footer>
    <!-- <audio autoplay loop ref="audio">
      <source src="../assets/music/landing-music.wav" type="audio/wav" />
      Your browser does not support the audio element.
    </audio> -->
    <!-- <svg width="0" height="0">
      <filter
        id="fractal"
        filterUnits="objectBoundingBox"
        x="0%"
        y="0%"
        width="100%"
        height="100%"
      >
        <feTurbulence
          id="turbulence"
          type="fractalNoise"
          baseFrequency="0.032 0.02"
          numOctaves="1"
        >
          <animate
            id="wave1"
            attributeName="baseFrequency"
            attributeType="XML"
            from="0.025 0.02"
            to="0.022 0.01"
            dur="5.5s"
            fill="freeze"
            begin="0; wave2.end"
          />
          <animate
            id="wave2"
            attributeName="baseFrequency"
            attributeType="XML"
            from="0.022 0.01"
            to="0.025 0.02"
            dur="5.5s"
            fill="freeze"
            begin="wave1.end"
          />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
      </filter>
    </svg> -->
  </div>
</template>

<script>
// import LandingBall from "../components/base/landingBall/LandingBall";
import SvgIcon from "../components/base/svgIcon/SvgIcon";
// import Switch from "../components/base/switch/Switch";
import SwitchSound from "../components/base/switch/SwitchSound";
import { mapMutations } from "vuex";

export default {
  name: "landing",
  components: {
    // LandingBall,
    SvgIcon,
    SwitchSound,
  },
  data() {
    return {
      duration: {
        animation: "mainlogo 5s infinite alternate",
      },
    };
  },
  mounted() {
    // this.autoPlay();
  },
  methods: {
    onClick() {
      this.$router.push({
        path: "/choose",
      });
    },
    stopMusic() {
      this.noPlay();
    },
    ...mapMutations(["noPlay"]),
    // * autoplay on wechat internal browser
    // autoPlay() {
    //   const audio = this.$refs.audio;
    //   // audio.play();
    //   function play() {
    //     audio.play();
    //     document.removeEventListener("touchstart", play, false);
    //   }
    //   document.addEventListener("WeixinJSBridgeReady", play, false);
    //   document.addEventListener("touchstart", play, false);
    // },
  },
};
</script>

<style lang="scss" scoped>
.landing {
  padding: 1rem 0;
  // @media only screen and (max-height: 740px) {
  //   padding: 1rem 0;
  // }
  background-image: url(https://warhammer-h5.oss-cn-shanghai.aliyuncs.com/assets/regular/homelanding.png);
  background-size: cover;
  &-header {
    height: 25%;
    @media only screen and (max-height: 740px) {
      height: 22%;
    }
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    &-sound {
      position: absolute;
      right: 10%;
      top: 15%;
    }
    &-icon {
      position: relative;
      // height: 6rem;
      height: 30%;
      // @media only screen and (max-height: 740px) {
      //   height: 25%;
      // }
    }
    &-title {
      margin: 3rem auto 0;
      font-size: 3.4rem;
      // font-size: 220%;
      line-height: 3.6rem;
      color: #c9c9c9;
      font-weight: 400;
      // letter-spacing: 0.1rem;
    }
  }

  &-section {
    height: 75%;
    // margin-top: 3rem;
    // width: 35rem;
    // height: 18rem;
    // @include absXCenter;
    padding: 0 2rem;
    @media only screen and (max-height: 667px) {
      padding: 0 1rem;
    }
    &-video {
      // border: 1px solid $color-text-pr;
      width: 100%;
      // padding: 0 1.5rem;
      display: flex;
      justify-content: center;
      video {
        box-shadow: 0 0 0.8rem 0.2rem rgba(255, 255, 255, 0.5);
        border: 1px solid $color-text-pr;
        width: 100%;
        @media only screen and (max-height: 740px) {
          width: 85%;
        }
        height: 100%;
        object-fit: cover;
      }
    }
    &-description {
      margin-top: 1.5rem;
      padding: 0.5rem 0.5rem;
      text-align: center;
      height: 6rem;
      text-indent: -0.5rem;
      span {
        font-size: $font-size-medium-x;
        // @media only screen and (max-height: 740px) {
        //   font-size: $font-size-medium;
        //   line-height: $font-size-large;
        // }
        font-weight: 400;
        line-height: 2.4rem;
      }
    }

    &-begin {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 0.5rem 0;
      img {
        // top: -2rem;
        // @include absXCenter;
        height: 15rem;
        width: 15rem;

        // @media only screen and (max-height: 740px) {
        //   height: 12rem; width: 12rem;
        // }

        object-fit: fit;
      }
    }
    &-intro {
      position: relative;
      top: -1rem;
      // margin-top: 10.5rem;
      text-align: center;
      div {
        animation: jump 2s infinite forwards;
        // width: 1.7rem;
        // margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        svg {
          width: 1rem;
          height: 1rem;
          opacity: 0.5;
        }
      }
      &-desc {
        margin-top: 0.5rem;
        padding: 0 2.5rem;
        font-size: $font-size-medium;
        letter-spacing: 0.05rem;
        line-height: 2rem;
        // @media only screen and (max-height: 740px) {
        //   font-size: $font-size-small;
        //   line-height: $font-size-medium-x;
        // }
      }
    }
  }

  &-footer {
    // margin-top: 9rem;
    position: fixed;
    bottom: 2rem;
    @media only screen and (max-height: 667px) {
      bottom: 0.3rem;
    }
    left: 0;
    right: 0;
    padding: 0.5rem 2.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    // font-size: 1.6rem;
    font-size: $font-size-medium;
    // @media only screen and (max-height: 740px) {
    //   font-size: $font-size-small;
    // }
    // font-family: Heiti SC, STHeiti, SimHei;

    &-terms {
      color: $color-text-p;
      font-size: 1.2rem;
      // font-family: Heiti SC, STHeiti, SimHei;
      //   text-decoration: underline $color-text-py;
      // animation: slideInLeft 2s ease-in, underline 2s ease-in-out 1.5s infinite;
    }
    &-beian {
      font-size: 1.2rem;
      // font-family: Heiti SC, STHeiti, SimHei;

      // animation: slideInRight 2s ease-in;
    }
  }
}

audio {
  position: absolute;
  bottom: 0;
}

@keyframes stroke {
  0% {
    fill: rgba(72, 138, 20, 0);
    stroke: #c9c9c9;
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 1;
  }
  70% {
    fill: rgba(72, 138, 20, 0);
    stroke: #c9c9c9;
    stroke-width: 3;
  }
  90%,
  100% {
    fill: #c9c9c9;
    stroke: rgba(54, 95, 160, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}

@keyframes underline {
  from {
    text-decoration: dashed $color-text-py;
  }
  to {
    text-decoration: underline $color-text-py;
  }
}
@keyframes jump {
  0% {
    transform: translateY(-0.3rem);
  }
  50% {
    transform: translateY(0.3rem);
  }
  100% {
    transform: translateY(-0.3rem);
  }
}
</style>
