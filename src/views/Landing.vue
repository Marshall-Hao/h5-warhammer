<template>
  <header class="landing-header">
    <div class="landing-header-icon">
      <hammer-icon></hammer-icon>
    </div>
    <div class="landing-header-title">
      <svg heightviewBox="0 0 200 40" width="320" height="40">
        <text x="15" y="30">这是一个标题</text>
      </svg>
    </div>
  </header>

  <section class="landing-section">
    <div class="landing-section-video">
      <fly-box :lineColor="`#BC3F2F`" :starColor="`#d93f30`" :duration="`5`">
        <video src="#" poster="../assets/images/vidPoster.png"></video>
      </fly-box>
    </div>

    <div class="landing-section-description">
      <span id="landing-section-typed"></span>
    </div>

    <div class="landing-section-begin" @click="onClick">
      <img src="../assets/images/lightBall.png" alt="LightBall" />
      <h4>Press to Begin</h4>
    </div>
    <footer class="landing-footer">
      <router-link class="landing-footer-terms" :to="`/terms`"
        >服务与条款</router-link
      >
      <p class="landing-footer-beian">沪ICP备11032828号-1</p>
    </footer>
  </section>
</template>

<script>
import HammerIcon from "../components/base/Icon/HammerIcon";
import FlyBox from "../components/base/fly-box/FlyBox";
import useTyped from "../assets/js/use-typed";

export default {
  name: "landing",
  components: {
    HammerIcon,
    FlyBox,
  },
  mounted() {
    useTyped(
      "#landing-section-typed",
      [
        "这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段",
      ],
      60,
      "_"
    );
  },
  methods: {
    onClick() {
      this.$router.push({
        path: "/choose",
      });
    },
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
        font-family: "otr";
        font-size: 1.4rem;
        animation: heartBeat 2s infinite;
      }
    }
  }

  &-footer {
    margin-top: 12rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    animation: name duration timing-function delay iteration-count direction
      fill-mode;
    &-terms {
      color: $color-text-py;
      //   text-decoration: underline $color-text-py;
      animation: slideInLeft 6s ease-in, underline 2s ease-in-out 6s infinite;
    }
    &-beian {
      animation: slideInRight 6s ease-in;
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
