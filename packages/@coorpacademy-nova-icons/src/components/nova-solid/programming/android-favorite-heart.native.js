import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 5.999a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54L12.293.292l-1.54 1.54a4.972 4.972 0 0 0-5.506 0L3.707.292 2.293 1.707l1.54 1.54A4.97 4.97 0 0 0 3 5.999zM16 9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6h1v6h.808A6.046 6.046 0 0 1 16 14.534V9zM22 15.998c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .894-2 2c0 3 4 6 4 6s4-3 4-6c0-1.107-.895-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
