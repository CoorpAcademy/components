import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 1a5 5 0 0 0-5 5v12c0 2.762 2.238 5 5 5s5-2.238 5-5V6a5 5 0 0 0-5-5zm4 18h-2v-1h-4v1H8v-3h2v1h4v-1h2v3zm0-11h-2V7h-4v1H8V5h2v1h4V5h2v3z"
    />
  </Svg>
);

export default SvgComponent;
