import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={1} cy={2.998} r={1} />
      <Path d="M4 1.998h14v2H4z" />
      <Circle cx={1} cy={6.998} r={1} />
      <Path d="M4 5.998h14v2H4z" />
      <Circle cx={1} cy={10.998} r={1} />
      <Path d="M4 9.998h14v2H4z" />
      <Circle cx={1} cy={14.998} r={1} />
      <Path d="M4 13.998h10v2H4zM24 16.998h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
