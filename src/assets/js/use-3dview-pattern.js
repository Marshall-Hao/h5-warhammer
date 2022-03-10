import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import submitAnswer from "../../services/answer";
import { useCookie } from "vue-cookie-next";
import { USER_KEY } from "../../assets/js/constant";

export default function use3DView(questionId, defaultScene) {
  // *cookie
  const cookie = useCookie();
  const headers = cookie.getCookie(USER_KEY);
  // * router
  const router = useRouter();
  const route = useRoute();
  const is40K = route.path.includes("40k");
  let choiceId;
  // * ref
  const scene = ref(defaultScene);
  const selected = ref(0);
  // * store

  //  * computed

  //  * lifecycle
  //  * methods
  function changeScene(answer, index) {
    scene.value = answer.image;
    selected.value = index;
    choiceId = answer.id;
  }
  function next() {
    submitAnswer(
      {
        questionId,
        choiceId,
      },
      headers
    );
    is40K
      ? router.push({
          path: "/questions/40k/6",
        })
      : router.push({
          path: "/questions/aos/6",
        });
  }
  //  * return
  return {
    changeScene,
    next,
    scene,
    selected,
  };
}
