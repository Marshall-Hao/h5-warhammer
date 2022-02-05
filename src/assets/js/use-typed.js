import Typed from "typed.js";

export default function useTyped(
  el,
  strings,
  typeSpeed,
  cursorChar,
  loop = false
) {
  new Typed(el, {
    // Waits 1000ms after typing "First"
    strings,
    typeSpeed,
    cursorChar,
    loop,
  });
}
