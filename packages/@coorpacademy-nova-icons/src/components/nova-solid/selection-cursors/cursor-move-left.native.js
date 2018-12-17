import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={18} cy={12.002} r={4} />
      <Path d="M2 12.002l9 3.999-2-3.999 2-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
