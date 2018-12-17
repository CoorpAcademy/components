import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <Path
      d="M19.998 14.998h-2v-2a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v2h-2v-4.101a5.007 5.007 0 0 0 4-4.899c0-2.756-2.243-5-5-5s-5 2.244-5 5a5.007 5.007 0 0 0 4 4.899v4.101h-3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-15-9c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.655-1.346 3-3 3s-3-1.346-3-3zm8 8h3v1h-3v-1zm6 7h-14v-4h14v4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
