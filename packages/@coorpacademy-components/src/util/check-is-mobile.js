const mobileUserAgentRegex = /iphone|ipad|ipod|android|blackberry|windows phone/g;

export const isMobile = () => mobileUserAgentRegex.test(navigator.userAgent.toLowerCase());
