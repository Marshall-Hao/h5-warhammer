export function removeUnit(string, begin, end) {
  return string.slice(begin, end);
}

// * debounce
export function debounce(fn, delay) {
  let _timer = null;
  return function () {
    console.log("clear");
    clearTimeout(_timer);
    _timer = setTimeout(() => {
      console.log(delay);
      fn.apply(this, arguments);
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
