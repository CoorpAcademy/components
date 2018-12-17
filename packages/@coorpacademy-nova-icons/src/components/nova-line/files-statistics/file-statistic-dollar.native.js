import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 14.417l2-2 1.293 1.293a.997.997 0 0 0 1.414 0l3-3-1.414-1.414L10 11.59l-1.293-1.294a1 1 0 0 0-1.414 0L6 11.59V8.003H4v9h10v-2H6v-.586z" />
      <Path d="M2 2h10v4h4v4.009h2V4.586L13.414 0H2C.897 0 0 .897 0 2v18.002c0 1.102.897 2 2 2h12v-2H2V2z" />
      <Path d="M21 17.002h-2c-.551 0-1-.449-1-1 0-.551.449-1 1-1h4v-2h-2v-1h-2v1c-1.654 0-3 1.345-3 3 0 1.654 1.346 3 3 3h2c.551 0 1 .449 1 1 0 .551-.449 1-1 1h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3 0-1.655-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
