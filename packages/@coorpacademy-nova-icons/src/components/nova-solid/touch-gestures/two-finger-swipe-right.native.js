import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8.001h-2v6h-1v-5H8v7H5l3 6h8v-6l-3-2z" />
      <Path d="M19.038 5.963A15.496 15.496 0 0 0 11.5 4.001a15.383 15.383 0 0 0-9.158 2.993l1.183 1.613A13.394 13.394 0 0 1 11.5 6.001c2.112 0 4.19.497 6.062 1.438L16 9.001h5v-5l-1.962 1.962z" />
    </G>
  </Svg>
);

export default SvgComponent;
