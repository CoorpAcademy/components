import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 19V3.001H3V21h18v-2z" />
      <Path d="M16 6.001h4V18h-4zM11 12h4v6h-4zM6 10h4v8H6z" />
    </G>
  </Svg>
);

export default SvgComponent;
