import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={20} cy={22.001} r={1} />
      <Circle cx={4} cy={22.001} r={1} />
      <Path d="M22.633 15.736L21 10.838V2.001a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8.837l-1.633 4.897c-.186.557-.109 1.129.208 1.57s.837.696 1.425.696h8v3H6v2h12v-2h-5v-3h8c.588 0 1.107-.254 1.425-.695s.393-1.014.208-1.57zM19 3.001v7H5v-7h14zm-15.612 13l1.333-4H19.28l1.333 4H3.388z" />
      <Path d="M10 13.001h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
