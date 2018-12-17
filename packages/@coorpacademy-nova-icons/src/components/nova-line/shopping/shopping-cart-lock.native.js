import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H12v2h5.589l-1.384 6H7.781l-.5-2H5.219l.811 3.243A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4z" />
      <Path d="M10 12V5a1 1 0 0 0-1-1c0-2.206-1.795-4-4-4S1 1.794 1 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1zM5 2c1.104 0 2 .898 2 2H3c0-1.102.896-2 2-2zm3 9H2V6h6v5z" />
      <Circle cx={5} cy={8} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
