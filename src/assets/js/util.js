export function removeUnit(string, begin, end) {
  return string.slice(begin, end);
}

// * debounce
let _timer = null;
export function debounce(fn, delay, index) {
  return function () {
    clearTimeout(_timer);
    _timer = setTimeout(() => {
      fn(index);
    }, delay);
  };
}

// * Throttle
export function throttle(fn, delay) {
  let _valid = true;
  return function () {
    if (_valid) {
      setTimeout(() => {
        fn.apply(this, arguments);
        _valid = true;
      }, delay);
      _valid = false;
    } else {
      return false;
    }
  };
}
export function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
