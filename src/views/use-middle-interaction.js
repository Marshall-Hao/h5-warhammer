import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import removeUnit from "../assets/js/util";

export default function useMiddleInteraction() {
  // * ref
  const leftRef = ref(null);
  const rightRef = ref(null);
  const iconTransform = ref(null);
  const beatAnimate = reactive({
    left: false,
    right: false,
  });
  const maskTransform = reactive({
    transparentOffset: 60,
    blkOffset: 45,
    duration: 0,
  });
  // * routers
  const router = useRouter();

  // * lifecycle
  const touch = {};

  onMounted(() => {
    touch.widthL = Number(
      removeUnit(getComputedStyle(leftRef.value).width, 0, -2)
    );
    touch.widthR = Number(
      removeUnit(getComputedStyle(rightRef.value).width, 0, -2)
    );
  });

  //  * methods
  function onMiddleTouchStart(e) {
    touch.startX = e.touches[0].pageX;
  }

  function onMiddleTouchMove(e) {
    const deltaX = e.touches[0].pageX - touch.startX;
    if (deltaX > 0) {
      touch.percent = deltaX / touch.widthL;
      beatAnimate.right = true;
      beatAnimate.left = false;
    } else {
      touch.percent = deltaX / touch.widthR;
      beatAnimate.left = true;
      beatAnimate.right = false;
    }

    iconTransform.value = {
      transform: `translate3d(${deltaX}px,0,0)`,
      transitionDuration: "0ms",
    };
    maskTransform.blkOffset = 45 - touch.percent * 0.45 * 100;
    maskTransform.transparentOffset = 60 - touch.percent * 0.4 * 100;
    maskTransform.duration = 0;
  }

  function onMiddleTouchEnd() {
    if (Math.abs(touch.percent) < 0.95) {
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
      touch.percent > 0
        ? router.push({
            path: "/questions/40k/1",
          })
        : router.push({
            path: "/questions/aos/1",
          });
    }
  }

  //   *return
  return {
    onMiddleTouchStart,
    onMiddleTouchMove,
    onMiddleTouchEnd,
    iconTransform,
    leftRef,
    rightRef,
    maskTransform,
    beatAnimate,
  };
}
