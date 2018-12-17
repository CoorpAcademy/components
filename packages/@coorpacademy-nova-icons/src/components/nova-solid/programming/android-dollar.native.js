import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.96 4.96 0 0 0-.833-2.752l1.54-1.54L12.293.294l-1.54 1.54a4.956 4.956 0 0 0-5.505 0L3.708.294 2.293 1.707l1.54 1.54A4.974 4.974 0 0 0 3 6zM16 9c0-.551-.448-1-1-1H1c-.552 0-1 .449-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v3h2v-3h1a1 1 0 0 0 1-1v-6h1v1.998c0-1.1.9-2 2-2V9zM21 16.998h-2a1.001 1.001 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.345-3 3s1.346 3 3 3h2a1 1 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.345 3-3s-1.345-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
