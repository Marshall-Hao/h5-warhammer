<template>
  <div class="choose">
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
            from="0.032 0.02"
            to="0.022 0.01"
            dur="3.5s"
            fill="freeze"
            begin="0; wave2.end"
          />
          <animate
            id="wave2"
            attributeName="baseFrequency"
            attributeType="XML"
            from="0.022 0.01"
            to="0.032 0.02"
            dur="3.5s"
            fill="freeze"
            begin="wave1.end"
          />
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="15"></feDisplacementMap>
      </filter>
    </svg>

    <header class="choose-header">
      <div class="choose-header-icons">
        <img src="../assets/images/sigMarSmallIcon.png" alt="sigMar" />
        <img src="../assets/images/40,000SmallIcon.png" alt="40,000" />
      </div>
      <p id="choose-header-description"></p>
    </header>

    <section class="choose-section">
      <div class="choose-section-displayF"></div>
      <div
        class="choose-section-displayS"
        :style="`-webkit-mask: ${maskValue};transition:-webkit-mask ${duration};`"
      ></div>
    </section>
    <div class="choose-section-options">
      <div class="choose-section-options-l" ref="leftRef">
        <div :class="{ heartbeat: beatAnimate.left }">选择</div>
        <ul>
          <li>
            <svg width="16.5" height="30" viewBox="0 0 110 200">
              <polyline
                points="100 0, 0 100, 100 200,110 190,25 100, 110 10 "
                fill="rgba(165, 147, 93, 0.4)"
                stroke-linecap="round"
              >
                <animate
                  id="l11"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(255, 255, 255, 0.4)"
                  to="rgba(165, 147, 93, 0.4)"
                  dur="2s"
                  begin="0; l12.end"
                ></animate>
                <animate
                  id="l12"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(165, 147, 93, 0.4)"
                  to="rgba(255, 255, 255, 0.4)"
                  dur="2s"
                  begin="l11.end"
                ></animate>
              </polyline>
            </svg>
          </li>
          <li>
            <svg width="16.5" height="30" viewBox="0 0 110 200">
              <polyline
                points="100 0, 0 100, 100 200,110 190,25 100, 110 10 "
                fill="rgba(165, 147, 93, 0.6)"
                stroke-linecap="round"
              >
                <animate
                  id="l21"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(255, 255, 255, 0.6)"
                  to="rgba(165, 147, 93, 0.6)"
                  dur="2s"
                  begin="0; l22.end"
                ></animate>
                <animate
                  id="l22"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(165, 147, 93, 0.6)"
                  to="rgba(255, 255, 255, 0.6)"
                  dur="2s"
                  begin="l21.end"
                ></animate>
              </polyline>
            </svg>
          </li>
          <li>
            <svg width="16.5" height="30" viewBox="0 0 110 200">
              <polyline
                points="100 0, 0 100, 100 200,110 190,25 100, 110 10 "
                fill="rgba(165, 147, 93, 0.8)"
                stroke-linecap="round"
              >
                <animate
                  id="l31"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(255, 255, 255, 0.8)"
                  to="rgba(165, 147, 93, 0.8)"
                  dur="2s"
                  begin="0; l32.end"
                ></animate>
                <animate
                  id="l32"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(165, 147, 93, 0.8)"
                  to="rgba(255, 255, 255, 0.8)"
                  dur="2s"
                  begin="l31.end"
                ></animate>
              </polyline>
            </svg>
          </li>
          <li>
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
          </li>
        </ul>
      </div>
      <div
        class="choose-section-options-m"
        :style="iconTransform"
        @touchstart.prevent="onMiddleTouchStart"
        @touchmove.prevent="onMiddleTouchMove"
        @touchend.prevent="onMiddleTouchEnd"
      >
        <hammer-icon></hammer-icon>
      </div>
      <div class="choose-section-options-r" ref="rightRef">
        <ul>
          <li>
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
          </li>
          <li>
            <svg width="16.5" height="30" viewBox="0 0 110 200">
              <polyline
                points="10 200, 110 100, 10 0,0 10,85 100, 0 190 "
                fill="rgba(100, 121, 139, 0.8)"
                stroke-linecap="round"
              >
                <animate
                  id="r31"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(255, 255, 255, 0.8)"
                  to="rgba(100, 121, 139, 0.8)"
                  dur="2s"
                  begin="0; r32.end"
                ></animate>
                <animate
                  id="r32"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(100, 121, 139, 0.8)"
                  to="rgba(255, 255, 255, 0.8)"
                  dur="2s"
                  begin="r31.end"
                ></animate>
              </polyline>
            </svg>
          </li>
          <li>
            <svg width="16.5" height="30" viewBox="0 0 110 200">
              <polyline
                points="10 200, 110 100, 10 0,0 10,85 100, 0 190 "
                fill="rgba(100, 121, 139, 0.6)"
                stroke-linecap="round"
              >
                <animate
                  id="r21"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(255, 255, 255, 0.6)"
                  to="rgba(100, 121, 139, 0.6)"
                  dur="2s"
                  begin="0; r22.end"
                ></animate>
                <animate
                  id="r22"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(100, 121, 139, 0.6)"
                  to="rgba(255, 255, 255, 0.6)"
                  dur="2s"
                  begin="r21.end"
                ></animate>
              </polyline>
            </svg>
          </li>
          <li>
            <svg width="16.5" height="30" viewBox="0 0 110 200">
              <polyline
                points="10 200, 110 100, 10 0,0 10,85 100, 0 190 "
                fill="rgba(100, 121, 139, 0.4)"
                stroke-linecap="round"
              >
                <animate
                  id="r11"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(255, 255, 255, 0.4)"
                  to="rgba(100, 121, 139, 0.4)"
                  dur="2s"
                  begin="0; r12.end"
                ></animate>
                <animate
                  id="r12"
                  attributeName="fill"
                  attributeType="XML"
                  from="rgba(100, 121, 139, 0.4)"
                  to="rgba(255, 255, 255, 0.4)"
                  dur="2s"
                  begin="r11.end"
                ></animate>
              </polyline>
            </svg>
          </li>
        </ul>
        <div
          style="color: #64798b; text-align: right"
          :class="{ heartbeat: beatAnimate.right }"
        >
          选择
        </div>
      </div>
    </div>
    <div class="choose-tips">
      <h1>左右滑动进行选择</h1>
    </div>
  </div>
</template>

<script>
import HammerIcon from "../components/base/Icon/HammerIcon";
import useTyped from "../assets/js/use-typed";
import { computed, onMounted } from "@vue/runtime-core";
import useMiddleInteraction from "./use-middle-interaction";
export default {
  name: "choose",
  components: {
    HammerIcon,
  },
  setup() {
    //   * ref
    //  * hooks
    const {
      onMiddleTouchStart,
      onMiddleTouchMove,
      onMiddleTouchEnd,
      iconTransform,
      maskTransform,
      leftRef,
      rightRef,
      beatAnimate,
    } = useMiddleInteraction();
    //  * computed
    const maskValue = computed(() => {
      return `linear-gradient(90deg, #000 ${maskTransform.blkOffset}%, transparent ${maskTransform.transparentOffset}%)`;
    });
    const duration = computed(() => {
      return `${maskTransform.duration}ms`;
    });
    //  * watch
    // * lifecycle
    onMounted(() => {
      useTyped(
        "#choose-header-description",
        [
          "这是一个很长的描述这是一个很长的描述",
          "这是一个很长的描述这是一个很长的描述",
          "这是一个很长的描述这是一个很长的描述",
        ],
        20,
        "WarHammer",
        true
      );
    });

    // * methods
    // * return
    return {
      onMiddleTouchStart,
      onMiddleTouchMove,
      onMiddleTouchEnd,
      iconTransform,
      leftRef,
      rightRef,
      maskTransform,
      maskValue,
      duration,
      beatAnimate,
    };
  },
};
</script>

<style lang="scss" scoped>
.choose {
  height: 100%;
  &-header {
    text-align: center;
    position: relative;
    z-index: 10;
    &-icons {
      width: 100%;
      display: flex;
      justify-content: space-between;
      img {
        filter: url(#fractal);
      }
    }
  }

  &-section {
    position: absolute;
    left: 0;
    top: 13rem;
    height: 60vh;
    width: 100vw;
    display: flex;
    z-index: 0;
    mask: linear-gradient(0, $color-theme-b 0%, transparent 100%);
    &-displayF {
      height: 100%;
      width: 100%;
      background: url(../assets/images/rightGuy.png);
      background-repeat: no-repeat;
      background-size: cover;
      filter: url(#fractal);
    }
    &-displayS {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url(../assets/images/leftGuy.png);
      background-repeat: no-repeat;
      background-size: cover;
      mask: linear-gradient(90deg, #000 45%, transparent 60%);
      z-index: 1;
      filter: url(#fractal);
    }

    &-options {
      z-index: 2;
      position: absolute;
      bottom: 16.5vh;
      left: 0;
      height: 6rem;
      width: 100vw;
      padding: 0.3rem;
      background-color: $color-theme-lb;
      box-shadow: 0 0rem 2rem 0.5rem $color-text-pr;
      display: flex;
      &-l,
      &-r {
        height: 100%;
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > div {
          width: 25%;
          font-size: 2rem;
          color: $color-theme-y;
        }
        ul {
          width: 75%;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          li {
            width: 1.65rem;
            height: 3rem;
          }
        }
      }

      &-m {
        height: 100%;
        width: 20%;
      }
    }
  }

  &-tips {
    position: absolute;
    display: block;
    width: 100vw;
    bottom: 6.5vh;
    text-align: center;
    animation: headShake 2s infinite ease-out;
  }
}

#choose-header-description {
  padding: 0 2rem;
  margin-top: 3rem;
  line-height: 3rem;
  letter-spacing: 0.2rem;
  font-size: $font-size-medium-x;
}

.heartbeat {
  animation: heartBeat 2s infinite;
}
</style>
