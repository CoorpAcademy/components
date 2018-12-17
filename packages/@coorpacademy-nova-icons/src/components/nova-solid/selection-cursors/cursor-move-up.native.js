import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={18.001} r={4} />
      <Path d="M11 12.002h2v-4h3l-4-6.001-4 6.001h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
