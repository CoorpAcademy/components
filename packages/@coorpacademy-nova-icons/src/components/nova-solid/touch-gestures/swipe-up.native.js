import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 3.005h-5v5l1.562-1.562A13.494 13.494 0 0 1 18 12.505c0 2.894-.901 5.65-2.606 7.976l1.612 1.182A15.375 15.375 0 0 0 20 12.505c0-2.644-.682-5.242-1.962-7.538L20 3.005z" />
      <Path d="M11.5 9.005H3v7h8.5a3.5 3.5 0 0 0 0-7zm0 5H10v-3h1.5a1.5 1.5 0 1 1 0 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
