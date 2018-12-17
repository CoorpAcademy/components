import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M5.555 22c.693 1.19 1.968 2 3.445 2s2.752-.81 3.445-2h-6.89zM15.147 15.807a8.9 8.9 0 0 1-2.134-.748 5.372 5.372 0 0 0 1.953 3.94H3.035A5.375 5.375 0 0 0 5 14.838V12c0-1.886 1.317-3.462 3.077-3.881A8.999 8.999 0 0 1 8 7c0-.31.016-.615.046-.917C5.19 6.542 3 9.017 3 12v2.838c0 1.46-.931 2.751-2.316 3.214L0 18.279V21h18v-2.721l-.684-.227a3.383 3.383 0 0 1-2.169-2.245z"
      fill="currentColor"
    />
    <Path
      d="M17 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M20 8h-4V3h2v3h2z" />
  </Svg>
);

export default SvgComponent;
