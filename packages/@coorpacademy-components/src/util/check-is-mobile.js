const MOBILE_USER_AGENT_REGEX = /iphone|ipad|ipod|android|blackberry|windows phone/g;

export const isMobile = (userAgent = navigator.userAgent) =>
  MOBILE_USER_AGENT_REGEX.test(userAgent.toLowerCase());
