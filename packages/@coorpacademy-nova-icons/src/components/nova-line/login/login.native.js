import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M17 22H6c-1.103 0-2-.897-2-2V4c0-1.102.897-2 2-2h11c1.103 0 2 .898 2 2v3h-2V4H6v16h11v-3h2v3c0 1.103-.897 2-2 2z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M20 11h-8.59l2.297-2.292-1.414-1.416-4.707 4.699 4.706 4.715 1.416-1.412L11.418 13H20z"
    />
  </Svg>
);

export default SvgComponent;
