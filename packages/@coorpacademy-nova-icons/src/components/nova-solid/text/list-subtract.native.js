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
      <Path d="M4 13.998h11v2H4zM17 16.998h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
