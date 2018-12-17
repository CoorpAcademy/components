import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 4c-.466 0-.869.322-.975.775L18.051 9H10v3c0 1.1-.9 2-2 2H4.969l1.061 4.243A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775l2.82-12.226H24V4h-4zM5 12v-1c1.654 0 3-1.346 3-3S6.654 5 5 5H3a1 1 0 0 1 0-2h4V1H5V0H3v1C1.346 1 0 2.346 0 4s1.346 3 3 3h2a1 1 0 0 1 0 2H1v2h2v1h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
