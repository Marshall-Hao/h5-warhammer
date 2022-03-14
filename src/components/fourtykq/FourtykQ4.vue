<template>
  <div class="q4">
    <div class="q4-bg">
      <div
        v-for="(answer, index) in questionChoices"
        :key="answer"
        :style="{ background: `url(${answer.image})` }"
        :class="{ 'selected-q': selected === index }"
      ></div>
    </div>
    <div class="q4-intro">
      <p>Press</p>
      <div>
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
      </div>
    </div>
    <LuckyWheel
      class="q4-luckwheel"
      ref="myLucky"
      width="400px"
      height="400px"
      :prizes="prizes"
      :blocks="blocks"
      :defaultConfig="defaultConfig"
      @end="endCallback"
    />
    <div
      class="q4-button"
      @touchstart.prevent="startWheel"
      @mousedown="startWheel"
    ></div>
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
  </div>
</template>

<script>
import submitAnswer from "../../services/answer";
import { USER_KEY } from "../../assets/js/constant";
import storage from "good-storage";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";

export default {
  name: "fourtyk-q4",
  data() {
    return {
      blocks: [
        { padding: "0px" },
        {
          padding: "0px",
          imgs: [
            {
              src: this.currentQuestion.selector_image,
              top: "26",
              width: "80%",
              rotate: true,
            },
          ],
        },
      ],
      prizes: [
        { title: "0" },
        { title: "1" },
        { title: "2" },
        { title: "3" },
        { title: "4" },
        { title: "5" },
        { title: "6" },
        { title: "7" },
        { title: "8" },
        { title: "9" },
        { title: "10" },
        { title: "11" },
      ],
      defaultConfig: {
        speed: 20,
      },
      choice1: ["1", "2", "3"],
      choice2: ["0", "11", "10"],
      choice3: ["4", "5", "6"],
      choice4: ["7", "8", "9"],
      selected: "",
    };
  },
  props: {
    currentQuestion: Object,
    questionBackground: Object,
    questionText: String,
    questionChoices: Array,
  },
  emits: ["updateParams"],
  methods: {
    // 点击抽奖按钮会触发star回调
    startWheel() {
      // 调用抽奖组件的play方法开始游戏
      this.$refs.myLucky.play();
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是0
        const index = Math.floor(Math.random() * 11);
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop(index);
      }, 4000);
    },
    // 抽奖结束会触发end回调
    endCallback(prize) {
      const headers = this.$cookie.getCookie(USER_KEY);
      const result = prize.title;
      const questionId = this.currentQuestion.id;
      let choiceId;
      if (this.choice1.includes(result)) {
        choiceId = this.questionChoices[0].id;
        this.selected = 0;
      } else if (this.choice2.includes(result)) {
        choiceId = this.questionChoices[1].id;
        this.selected = 1;
      } else if (this.choice3.includes(result)) {
        choiceId = this.questionChoices[2].id;
        this.selected = 2;
      } else {
        choiceId = this.questionChoices[3].id;
        this.selected = 3;
      }
      this.$emit("updateParams", 5);
      submitAnswer(
        {
          questionId,
          choiceId,
        },
        headers
      );
      this.goNextPage();
    },
    goNextPage() {
      storage.session.set("__currentquiz__", 4);
      setTimeout(() => {
        this.$router.push({
          path: "/questions/40k/5",
        });
      }, 1000);
    },
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    onBeforeRouteUpdate(() => {
      const currentQuiz = storage.session.get("__currentquiz__");
      console.log(Number(route.params.id), currentQuiz);
      if (Number(route.params.id) > currentQuiz) {
        router.push({
          path: `/questions/40k/${currentQuiz + 1}`,
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.q4 {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
  &-bg {
    position: fixed;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    filter: url(#fractal);
    div {
      transform: scale(1.01, 1.01);
      background-size: cover;
    }
  }
  &-intro {
    position: absolute;
    left: 45.3%;
    top: 25%;
    animation: jump 2s infinite ease-in-out forwards;
    p {
      font-size: 1.8rem;
    }
    div {
      transform: rotateZ(270deg);
      margin-top: 1.4rem;
    }
  }
  &-luckwheel {
    @include absCenter;
    animation: zoomIn 1s ease;
  }
  &-button {
    @include absCenter;
    height: 23rem;
    width: 23rem;
    border-radius: 50%;
  }
}
.selected-q {
  animation: pulse 0.7s infinite;
}

@keyframes jump {
  0% {
    transform: translateY(-0.5rem);
  }
  50% {
    transform: translateY(0.5rem);
  }
  100% {
    transform: translateY(-0.5rem);
  }
}
</style>
