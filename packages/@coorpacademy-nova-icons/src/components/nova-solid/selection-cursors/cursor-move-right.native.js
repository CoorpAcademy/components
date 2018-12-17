import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={6} cy={12.002} r={4} />
      <Path d="M22 12.002l-6-4v3h-4v2h4v2.999z" />
    </G>
  </Svg>
);

export default SvgComponent;
