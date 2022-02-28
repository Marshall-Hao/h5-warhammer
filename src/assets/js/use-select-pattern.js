import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { debounce } from "./util";

export default function useSelectPattern(emit) {
  //  * router
  const router = useRouter();
  const route = useRoute();
  // * ref
  const selected = ref(null);
  //  * methods
  function choiceTouchStart(index) {
    selected.value = index;
    debounce(getPoinstAndNext.bind(index), 1000, index)();
  }

  function choiceTouchMove(index) {
    selected.value = index;
  }
  function choiceTouchEnd(index) {
    selected.value = null;
    debounce(getPoinstAndNext.bind(index), 1000, index)();
  }

  function getPoinstAndNext(index) {
    //TODO; calculate the score based on the choice
    console.log("the choice is", index);
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
    }
  }

  return {
    choiceTouchMove,
    choiceTouchEnd,
    choiceTouchStart,
    selected,
  };
}
