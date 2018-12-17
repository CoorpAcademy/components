import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 13h-3c-.551 0-1-.449-1-1v-2c0-.551.449-1 1-1h1v1h2V6h-2v1h-1c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h3c.551 0 1 .449 1 1v1c0 .551-.449 1-1 1h-8V9a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12H3v2h10v-2h-2v-1h8c1.654 0 3-1.346 3-3v-1c0-1.654-1.346-3-3-3zM7 7h2V5h3V3H4v2h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
