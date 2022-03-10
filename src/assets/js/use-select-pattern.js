import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { debounce } from "./util";
import submitAnswer from "../../services/answer";
import { useCookie } from "vue-cookie-next";
import { USER_KEY } from "../../assets/js/constant";

export default function useSelectPattern(emit, questionId) {
  // *cookie
  const cookie = useCookie();
  const headers = cookie.getCookie(USER_KEY);
  //  * router
  const router = useRouter();
  const route = useRoute();
  // * ref
  const selected = ref(null);
  //  * methods
  function choiceTouchStart(index) {
    selected.value = index;
    // debounce(getPoinstAndNext.bind(index), 1000, index)();
  }

  function choiceTouchMove(index) {
    selected.value = index;
  }
  function choiceTouchEnd(index) {
    selected.value = null;
    debounce(getPoinstAndNext.bind(index), 1000, index)();
  }

  function getPoinstAndNext(choiceId) {
    //TODO; calculate the score based on the choice
    submitAnswer(
      {
        questionId,
        choiceId,
      },
      headers
    );
    //  * go to next question id
    const isFourtyK = route.path.includes("40k");
    const paramsId = Number(route.params.id);
    emit("updateParams", paramsId + 1);
    if (isFourtyK) {
      nextPage(paramsId, "40k");
    } else {
      nextPage(paramsId, "aos");
    }
  }

  function nextPage(index, faction) {
    if (index !== 7) {
      router.push({
        path: `/questions/${faction}/${index + 1}`,
      });
    } else {
      router.push({
        path: `/reveal`,
      });
    }
  }

  return {
    choiceTouchMove,
    choiceTouchEnd,
    choiceTouchStart,
    selected,
  };
}
