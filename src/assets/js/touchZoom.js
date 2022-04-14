import { nextTick } from "vue";
import gsap from "gsap";
import { getOffset } from "./dom";

export default async function touchZoom(
  clickFn,
  endFn,
  index,
  answer,
  selected,
  unselect,
  needOffset = false
) {
  clickFn(index);
  await nextTick();
  const selectedAns = await document.querySelector(selected);
  let positionX = getOffset(selectedAns).left;
  if (needOffset) {
    positionX -= 40;
  }
  let positionY = getOffset(selectedAns).top;

  const unselectedAns = await document.querySelector(unselect);
  if (unselectedAns) {
    gsapZoom(selected, unselect, positionX, positionY, endFn, answer);
  }
}

function gsapZoom(selected, unselect, positionX, positionY, endFn, answer) {
  gsap
    .timeline()
    .to(unselect, {
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
    })
    .fromTo(
      selected,
      {
        position: "absolute",
        left: `${positionX}`,
        top: `${positionY}`,
      },
      {
        position: "absolute",
        xPercent: -50,
        left: "50%",
        yPercent: -50,
        top: "50%",
        duration: 1,
        scale: 1.5,
        ease: "sine.out",
        onComplete: () => {
          endFn(answer);
        },
      }
    );
}
