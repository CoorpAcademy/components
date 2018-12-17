import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H10v2h7.589l-1.384 6H7.781l-1.5-6H4.22l1.811 7.243c.111.445.51.757.969.757h10a1 1 0 0 0 .975-.775l2.821-12.226H24v-2h-4zM9.707 4.707L8.293 3.293 6 5.586V0H4v5.586L1.707 3.293.293 4.707 5 9.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
