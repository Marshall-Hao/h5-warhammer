import { ref } from "vue";
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import submitAnswer from "../../services/answer";
import { useCookie } from "vue-cookie-next";
import { USER_KEY } from "../../assets/js/constant";
import storage from "good-storage";

export default function use3DView(questionId, defaultScene, defaultChoiceId) {
  onBeforeRouteUpdate(() => {
    const currentQuiz = storage.session.get("__currentquiz__");
    console.log(Number(route.params.id), currentQuiz);
    if (Number(route.params.id) > currentQuiz) {
      router.push({
        path: `/questions/40k/${currentQuiz + 1}`,
      });
    }
  });
  // *cookie
  const cookie = useCookie();
  const headers = cookie.getCookie(USER_KEY);
  // * router
  const router = useRouter();
  const route = useRoute();
  const is40K = route.path.includes("40k");
  let choiceId = defaultChoiceId;
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
    storage.session.set("__currentquiz__", 5);
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
