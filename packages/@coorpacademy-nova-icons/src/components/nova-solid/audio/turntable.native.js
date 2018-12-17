import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={11} cy={13.003} r={2} />
      <Path d="M20 4.003v10c0 1.099-.854 2.285-1.897 2.632L14.58 17.81A5.965 5.965 0 0 1 11 19.003a6 6 0 1 1 5-9.314V4.003H4c-1.1 0-2 .9-2 2v14c0 1.099.9 2 2 2h16c1.1 0 2-.901 2-2v-14c0-1.1-.9-2-2-2z" />
      <Path d="M13.372 16.931l4.071-1.628c.888-.355 1.558-1.344 1.558-2.3v-10h-2v10c0 .142-.168.389-.3.442l-4.071 1.629.742 1.857z" />
    </G>
  </Svg>
);

export default SvgComponent;
