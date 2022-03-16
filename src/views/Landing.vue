<template>
  <div class="landing">
    <header class="landing-header">
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
        Enter the Worlds of<br />
        Warhammer
      </div>
    </header>

    <section class="landing-section">
      <div class="landing-section-video">
        <video src="#" poster="../assets/images/regular/vidPoster.png"></video>
      </div>

      <div class="landing-section-description">
        <span id="landing-section-typed"></span>
      </div>

      <div class="landing-section-begin" @click="onClick">
        <img src="../assets/images/regular/pulsing_orb.gif" alt="orb" />
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

        <h4>
          Where do you belong in these incredible settings? Discover your
          destiny now.
        </h4>
      </div>
      <footer class="landing-footer">
        <router-link class="landing-footer-terms" :to="`/terms`"
          >服务与条款</router-link
        >
        <p class="landing-footer-beian">沪ICP备11032828号-1</p>
      </footer>
    </section>
    <svg width="0" height="0">
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
    </svg>
  </div>
</template>

<script>
import LandingBall from "../components/base/landingBall/LandingBall";
import useTyped from "../assets/js/use-typed";
import login from "../services/login";
import { mapActions } from "vuex";
import ahoy from "ahoy.js";
import SvgIcon from "../components/base/svgIcon/SvgIcon";

export default {
  name: "landing",
  components: {
    LandingBall,
    SvgIcon,
  },
  data() {
    return {
      duration: {
        animation: "mainlogo 5s infinite alternate",
      },
    };
  },
  mounted() {
    this.login();
    useTyped(
      "#landing-section-typed",
      [
        "War is everything. Mighty empires clash in the eternal struggle for domination – across realms of magic, and the bleak vastness of space ",
      ],
      25,
      "."
    );
    //  * events track
    ahoy.configure({
      urlPrefix: "https://api-staging.h5.games-workshop-china.com",
    });
    ahoy.track("landingPage", {
      url: "http://localhost:8080/",
      title: "landing",
      time: Date.now(),
      page: "/landing",
    });
  },
  methods: {
    onClick() {
      this.$router.push({
        path: "/choose",
      });
    },
    async login() {
      const loginRes = await login();
      const list = {
        aos: loginRes["categories"]["aos"]["questions"],
        fourtyK: loginRes["categories"]["40k"]["questions"],
      };
      this.addQuestions(list);
    },
    ...mapActions(["addQuestions"]),
  },
};
</script>

<style lang="scss" scoped>
.landing {
  &-header {
    text-align: center;
    &-icon {
      position: relative;
      height: 6rem;
    }
    &-title {
      margin: $font-size-medium-x auto 0;
      font-size: 3rem;
      line-height: 3.3rem;
      color: #c9c9c9;
      font-weight: 400;
      letter-spacing: 0.1rem;
    }
  }

  &-section {
    margin-top: 3rem;
    width: 35rem;
    height: 18rem;
    @include absXCenter;
    &-video {
      border: 1px solid $color-text-pr;
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-description {
      margin-top: 1rem;
      padding: 0.5rem;
      text-align: center;
      height: 11rem;
      span {
        font-size: $font-size-medium-x;
        line-height: 2.5rem;
      }
    }

    &-begin {
      position: relative;
      img {
        top: -2rem;
        @include absXCenter;
        height: 15rem;
        width: 15rem;
        object-fit: fit;
      }
    }
    &-intro {
      margin-top: 10.5rem;
      text-align: center;
      div {
        animation: jump 2s infinite forwards;
        width: 1.7rem;
        margin: 0 auto;
        svg {
          width: 1rem;
          height: 1rem;
          opacity: 0.5;
        }
      }
      h4 {
        margin-top: 1rem;
        padding: 0 1.4rem;
        font-size: 1.5rem;
        letter-spacing: 0.05rem;
        line-height: 1.5rem;
      }
    }
  }

  &-footer {
    margin-top: 9rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    &-terms {
      color: $color-text-py;
      //   text-decoration: underline $color-text-py;
      animation: slideInLeft 3s ease-in, underline 2s ease-in-out 6s infinite;
    }
    &-beian {
      animation: slideInRight 3s ease-in;
    }
  }
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
