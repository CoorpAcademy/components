import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H5a1.005 1.005 0 0 0-.971 1.243l2 8c.112.445.512.757.971.757h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4zM16.205 17H7.781l-1.5-6h11.308l-1.384 6z" />
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M0 3h6v2H0z" />
    </G>
  </Svg>
);

export default SvgComponent;
