export const isMobile = (userAgent, includeTablet = false) => {
  const isTouch =
    'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

  const isMobileScreen = window.innerWidth <= 640;
  const isTabletScreen = window.innerWidth <= 960 && window.innerWidth > 640;

  const isSmallScreen = includeTablet ? isMobileScreen || isTabletScreen : isMobileScreen;

  const isMobileUserAgent = /Android|iPhone|iPad|iPod|Mobile|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent
  );

  return isSmallScreen || (isTouch && isMobileUserAgent);
};
