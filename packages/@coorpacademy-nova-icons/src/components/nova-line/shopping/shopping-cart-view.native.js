import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H14v2h3.589l-1.384 6H7.781l-1-4H4.719l1.311 5.243A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4z" />
      <Path d="M8 10c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5c0 1.018.309 1.962.833 2.753L.586 11 2 12.414l3.247-3.247C6.037 9.691 6.982 10 8 10zm0-8c1.654 0 3 1.346 3 3S9.654 8 8 8 5 6.654 5 5s1.346-3 3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
