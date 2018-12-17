import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.001 13h-18v2H6.22l2 8h7.562l2-8h3.219z" />
      <Circle cx={12.001} cy={4} r={3} />
      <Path d="M17.001 12c0-2.757-2.243-5-5-5s-5 2.243-5 5h10z" />
    </G>
  </Svg>
);

export default SvgComponent;
