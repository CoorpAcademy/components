export const isMobile = userAgent => {
  const isTouch =
    'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

  const isSmallScreen = window.innerWidth <= 768;

  const isMobileUserAgent = /Android|iPhone|iPad|iPod|Mobile|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );

  return isSmallScreen || (isTouch && isMobileUserAgent);
};
