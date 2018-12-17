import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.293 15.707L8 13.414l-3 3V17h9v-3.586l-2.293 2.293a.999.999 0 0 1-1.414 0z" />
      <Path d="M18 10V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h12V19H3V8h2v5.586l2.293-2.293a.999.999 0 0 1 1.414 0L11 13.586l2.293-2.293L14 12c0-1.1.9-2 2-2h2zm-6-4V1l5 5h-5z" />
      <Path d="M21 17.001h-2a1 1 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1 1 0 0 1 0 2.001h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3.001 0-1.654-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
