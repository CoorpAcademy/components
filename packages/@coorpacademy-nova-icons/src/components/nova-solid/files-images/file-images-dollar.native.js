import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 10V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12v-3H3l3-4 2 2 4-5 2 4.667V12c0-1.1.9-2 2-2h2zM5.5 13A2.498 2.498 0 0 1 3 10.5a2.499 2.499 0 1 1 5 0A2.5 2.5 0 0 1 5.5 13zM12 6V1l5 5h-5z" />
      <Path d="M21 17.001h-2a1 1 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1.001 1.001 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
