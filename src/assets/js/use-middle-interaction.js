import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { removeUnit } from "./util";
import quizStart from "../../services/choose";
import submitAnswer from "../../services/answer";
import { useStore } from "vuex";
import { detectMob } from "./util";
import { useCookie } from "vue-cookie-next";
import { USER_KEY } from "../../assets/js/constant";
import storage from "good-storage";
// import ahoy from "../../services/ahoy";
// import particleGenerator from "./particle";
import gsap from "gsap";

export default function useMiddleInteraction(
  direction = "h",
  questionId = 0,
  choices = {}
) {
  const cookie = useCookie();
  const headers = cookie.getCookie(USER_KEY);
  const isMob = detectMob();

  // * ref

  const swipeOne = ref(null);
  const swipeTwo = ref(null);
  const iconTransform = ref(null);
  const beatAnimate = reactive({
    left: false,
    right: false,
  });
  const maskTransform = reactive({
    transparentOffset: 60,
    transparentOffsetY: 55,
    transparentOffsetYGrey: 55,
    redOffset: 25,
    greyOffset: 25,
    blkOffset: 45,
    duration: 0,
  });
  // * routers
  const router = useRouter();

  // * store
  const store = useStore();
  // * util
  const touch = {};

  // * lifecycle
  onMounted(() => {
    touch.widthL = Number(
      removeUnit(getComputedStyle(swipeOne.value).width, 0, -2)
    );
    touch.widthR = Number(
      removeUnit(getComputedStyle(swipeTwo.value).width, 0, -2)
    );
    touch.heightT = Number(
      removeUnit(getComputedStyle(swipeOne.value).height, 0, -2)
    );
    touch.heightB = Number(
      removeUnit(getComputedStyle(swipeTwo.value).height, 0, -2)
    );
  });

  //  * methods
  function onMiddleTouchStart(e) {
    if (isMob) {
      touch.startX = e.touches[0].pageX;
      touch.startY = e.touches[0].pageY;
    } else {
      touch.startX = e.pageX;
      touch.startY = e.pageY;
    }
    touch.directionLocked = "";
  }

  function onMiddleTouchMove(e) {
    touch.directionLocked = direction === "h" ? "h" : "v";
    let deltaX, deltaY;
    if (isMob) {
      deltaX = e.touches[0].pageX - touch.startX;
      deltaY = e.touches[0].pageY - touch.startY;
    } else {
      deltaX = e.pageX - touch.startX;
      deltaY = e.pageY - touch.startY;
    }
    if (touch.directionLocked === "v") {
      verticalMoveAcion(deltaY);
    } else {
      horizontalMoveAcion(deltaX);
    }
  }

  function onMiddleTouchEnd() {
    if (touch.directionLocked === "v") {
      verticalEndAction();
    } else {
      horizontalEndAcion();
    }
  }

  function horizontalMoveAcion(deltaX) {
    if (deltaX > 0) {
      touch.percentX = deltaX / touch.widthL;
      beatAnimate.right = true;
      beatAnimate.left = false;
    } else {
      touch.percentX = deltaX / touch.widthR;
      beatAnimate.left = true;
      beatAnimate.right = false;
    }

    iconTransform.value = {
      transform: `translate3d(${deltaX}px,0,0)`,
      transitionDuration: "0ms",
    };
    maskTransform.blkOffset = 45 - touch.percentX * 0.45 * 100;
    maskTransform.transparentOffset = 60 - touch.percentX * 0.4 * 100;
    maskTransform.duration = 0;
  }

  function verticalMoveAcion(deltaY) {
    if (deltaY > 0) {
      touch.percentY = deltaY / touch.heightB;
      maskTransform.greyOffset = Math.max(25 + touch.percentY * 0.25 * 100, 25);
      maskTransform.transparentOffsetYGrey = Math.max(
        55 + touch.percentY * 0.45 * 100,
        55
      );
    } else {
      touch.percentY = deltaY / touch.heightT;
      maskTransform.redOffset = Math.max(25 - touch.percentY * 0.25 * 100, 25);
      maskTransform.transparentOffsetY = Math.max(
        55 - touch.percentY * 0.45 * 100,
        55
      );
    }
    iconTransform.value = {
      transform: `translate3d(0,${deltaY}px,0)`,
      transitionDuration: "0ms",
    };
    maskTransform.duration = 0;
  }
  function horizontalEndAcion() {
    if (Math.abs(touch.percentX) < 0.95) {
      const deltaX = 0;
      beatAnimate.left = false;
      beatAnimate.right = false;
      iconTransform.value = {
        transform: `translate3d(${deltaX}px,0,0)`,
        transitionDuration: "300ms",
      };
      maskTransform.transparentOffset = 60;
      maskTransform.blkOffset = 45;
      maskTransform.duration = 300;
    } else {
      storage.session.set("__currentquiz__", 1);
      if (touch.percentX > 0) {
        quizStart(1, headers);
        store.commit("setCategory", "40k");
        router.push({
          path: "/questions/40k/1",
        });
      } else {
        quizStart(2, headers);
        store.commit("setCategory", "aos");
        router.push({
          path: "/questions/aos/1",
        });
      }
    }
  }

  function verticalEndAction() {
    if (Math.abs(touch.percentY) < 0.75) {
      const deltaY = 0;
      iconTransform.value = {
        transform: `translate3d(0,${deltaY}px,0)`,
        transitionDuration: "300ms",
      };
      maskTransform.transparentOffsetY = 55;
      maskTransform.transparentOffsetYGrey = 55;
      maskTransform.redOffset = 25;
      maskTransform.greyOffset = 25;
      maskTransform.duration = 300;
    } else {
      if (touch.percentY < 0) {
        submitAnswer(
          {
            questionId,
            choiceId: choices[0].id,
          },
          headers
        );
        explosion("top");
      } else {
        submitAnswer(
          {
            questionId,
            choiceId: choices[1].id,
          },
          headers
        );

        explosion("bottom");
      }
      storage.session.set("__currentquiz__", 7);
      // router.push({
      //   path: "/reveal",
      // });
    }
  }

  function explosion(ele) {
    const element = document.querySelector(`.${ele}`);
    const elementMask = document.querySelector(`.${ele} div`);
    // particleGenerator(element, false, false);
    gsap
      .timeline()
      .to(elementMask, {
        opacity: 0,
        duration: 0,
      })
      .to(element, {
        opacity: 0,
        duration: 2,
        ease: "expo.out",
        onComplete: () => {
          router.push({
            path: "/reveal",
          });
        },
      });
  }
  //   *return
  return {
    onMiddleTouchStart,
    onMiddleTouchMove,
    onMiddleTouchEnd,
    iconTransform,
    swipeOne,
    swipeTwo,
    maskTransform,
    beatAnimate,
  };
}
