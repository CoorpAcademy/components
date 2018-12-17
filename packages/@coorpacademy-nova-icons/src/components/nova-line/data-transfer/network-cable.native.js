import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M22 11.001h-3v-1a1 1 0 0 0-1-1h-3v-3a1 1 0 0 0-1-1h-1v-3h-2v3h-1a1 1 0 0 0-1 1v3H6a1 1 0 0 0-1 1v1H2v2h3v1a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h1v3h2v-3h1a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1v-1h3v-2zm-5 2h-3a1 1 0 0 0-1 1v3h-2v-3a1 1 0 0 0-1-1H7v-2h3a1 1 0 0 0 1-1v-3h2v3a1 1 0 0 0 1 1h3v2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
