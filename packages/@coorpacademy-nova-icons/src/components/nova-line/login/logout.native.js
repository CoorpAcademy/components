import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18 22H7c-1.103 0-2-.897-2-2v-3h2v3h11V4H7v3H5V4c0-1.102.897-2 2-2h11c1.103 0 2 .898 2 2v16c0 1.103-.897 2-2 2z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M11.707 7.292l-1.414 1.416L12.59 11H4v2h8.582l-2.29 2.294 1.416 1.412 4.706-4.715z"
    />
  </Svg>
);

export default SvgComponent;
