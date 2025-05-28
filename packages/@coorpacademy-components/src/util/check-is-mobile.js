export const isMobile = () =>
  window.ontouchstart || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
