const MOBILE_USER_AGENT_REGEX =
  /iphone|ipod|ipad|android|blackberry|bb\d+|meego|windows phone|palm|symbian|webos|mobile|tablet/i;
export const isMobile = userAgent =>
  userAgent && MOBILE_USER_AGENT_REGEX.test(userAgent.toLowerCase());
