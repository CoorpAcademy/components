import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 10V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12V12c0-1.1.9-2 2-2h2zm-9 5H3v-2h6v2zm3-4H3V9h9v2zm0-5V1l5 5h-5z" />
      <Path d="M21 17h-2a1 1 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1 1 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
