import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 10h4v4h-4zM4 10h4v4H4zM10 16h4v4h-4z" />
      <Path d="M16 22H2V8h10V6H0v18h18V14h-2z" />
      <Path d="M4 16h4v4H4zM19 5h-2a1 1 0 1 1 0-2h4V1h-2V0h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1.001 1.001 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
