<template>
  <div class="landing">
    <header class="landing-header">
      <div class="landing-header-icon">
        <svg-icon
          :name="`hammer`"
          :prefix="`war-`"
          :fill="`none`"
          :stroke="`#FFFFFF`"
          :duration="duration"
        ></svg-icon>
      </div>
      <div class="landing-header-title">
        <svg heightviewBox="0 0 200 40" width="360" height="40">
          <text x="65" y="30">Warhammer</text>
        </svg>
      </div>
    </header>

    <section class="landing-section">
      <div class="landing-section-video">
        <fly-box :lineColor="`#BC3F2F`" :starColor="`#d93f30`" :duration="`5`">
          <video
            src="#"
            poster="../assets/images/regular/vidPoster.png"
          ></video>
        </fly-box>
      </div>

      <div class="landing-section-description">
        <span id="landing-section-typed"></span>
      </div>

      <div class="landing-section-begin" @click="onClick">
        <landing-ball></landing-ball>
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
  </div>
</template>

<script>
import FlyBox from "../components/base/fly-box/FlyBox";
import LandingBall from "../components/base/landingBall/LandingBall";
import useTyped from "../assets/js/use-typed";
import login from "../services/login";
import { mapActions } from "vuex";
// import ahoy from "ahoy.js";
import ahoy from "../services/ahoy"
console.log({ahoy})
import SvgIcon from "../components/base/svgIcon/SvgIcon";

export default {
  name: "landing",
  components: {
    FlyBox,
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
    useTyped(
      "#landing-section-typed",
      [
        "War is everything. Mighty empires clash in the eternal struggle for domination – across realms of magic, and the bleak vastness of space. ",
      ],
      60,
      "_"
    );
    // ahoy.trackView()
    //  * events track
    // ahoy.configure({
    //   urlPrefix: "https://wh-staging.papercranetech.cn",
    // });
    // ahoy.track("landingPage", {
    //   url: "http://localhost:8080/",
    //   title: "landing",
    //   time: Date.now(),
    //   page: "/landing",
    // });
  },
  methods: {
    async onClick() {
      const loginRes = await login();
      const list = {
        aos: loginRes["categories"]["aos"]["questions"],
        fourtyK: loginRes["categories"]["40k"]["questions"],
      };
      this.addQuestions(list);
      this.$router.push({
        path: "/choose",
      });
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
      margin-top: $font-size-medium-x;
      text {
        width: 100%;
        font-size: 2.5rem;
        line-break: auto;
      }
    }
  }

  &-section {
    margin-top: 3rem;
    width: 35rem;
    height: 18rem;
    @include absXCenter;
    &-video {
      video {
        width: 34rem;
        height: 17rem;
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
      text-align: center;
      img {
        height: 20rem;
        width: 20rem;
      }
      h4 {
        margin-top: 1rem;
        padding: 0 1.4rem;
        font-size: 1.5rem;
        letter-spacing: 0.05rem;
        line-height: 1.5rem;
        animation: heartBeat 2s infinite;
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

text {
  animation: stroke 5s infinite alternate;
  letter-spacing: 10px;
  font-size: 4rem;
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
</style>
