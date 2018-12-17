import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={6} cy={6} r={3} />
      <Circle cx={18} cy={18} r={3} />
      <Path d="M3.293 19.294l16-16 1.413 1.414-16 16z" />
    </G>
  </Svg>
);

export default SvgComponent;
