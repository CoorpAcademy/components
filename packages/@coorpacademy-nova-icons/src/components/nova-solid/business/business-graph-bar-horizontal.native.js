import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 19V3.001H3V21h18v-2z" />
      <Path d="M6 14h12v4H6zM6 9h6v4H6zM6 4.001h8V8H6z" />
    </G>
  </Svg>
);

export default SvgComponent;
