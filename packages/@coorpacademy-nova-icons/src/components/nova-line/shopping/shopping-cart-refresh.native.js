import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H14v2h3.589l-1.384 6H7.781l-.75-3H4.969l1.061 4.243A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4z" />
      <Path d="M6.002 12.003c3.309 0 6-2.691 6-6h-2c0 2.206-1.795 4-4 4-1.077 0-2.063-.44-2.811-1.19l1.811-1.81h-5v5l1.764-1.763a6.032 6.032 0 0 0 4.236 1.763zM6.002 2.003c1.078 0 2.064.44 2.811 1.189L7.002 5.003h5v-5l-1.761 1.761A5.939 5.939 0 0 0 6.002.003c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
