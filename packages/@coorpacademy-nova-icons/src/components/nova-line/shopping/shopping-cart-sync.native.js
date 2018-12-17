import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H13v2h4.589l-1.384 6H7.781l-.75-3H4.969l1.061 4.243A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4z" />
      <Path d="M12 6c0-3.309-2.691-6-6-6S0 2.691 0 6h2c0-2.206 1.795-4 4-4s4 1.794 4 4-1.795 4-4 4a3.948 3.948 0 0 1-2.793-1.134l-.035-.038L5 7H0v5l1.758-1.757A5.954 5.954 0 0 0 6 12c3.309 0 6-2.691 6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
