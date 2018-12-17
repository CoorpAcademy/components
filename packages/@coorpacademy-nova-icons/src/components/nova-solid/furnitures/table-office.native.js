import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M13 11v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8H13zm3 4a1 1 0 1 1-.002-1.998A1 1 0 0 1 16 15z" />
      <Path d="M23 10V5a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v15h2V10h20zm-7-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 6h10v2H3V6z" />
    </G>
  </Svg>
);

export default SvgComponent;
