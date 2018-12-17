import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={6.002} r={4} />
      <Path d="M13 12.002h-2v3.999H8l4 6 4-6h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
