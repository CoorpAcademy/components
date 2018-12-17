import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H12v2h5.589l-1.384 6H7.781l-1-4H4.719l1.311 5.243A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4z" />
      <Path d="M6 9.166L10.285 12 8.292 7.416 12 4.286H7.714L6 0 4.285 4.286H0l3.708 3.13L1.714 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
