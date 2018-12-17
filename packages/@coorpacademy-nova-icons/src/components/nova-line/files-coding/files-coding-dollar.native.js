import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 13.007h2v3.997H8zM11 8.007h2v4h-2zM7 8.007h3v4H7zM4 8.008h2v3.999H4zM4 13.007h3v3.997H4zM11 13.006h2v3.998h-2z" />
      <Path d="M2 2.004h10v4h4v4.002h2V4.59L13.414.004H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h12v-2H2v-18z" />
      <Path d="M21 17.004h-2c-.551 0-1-.449-1-1 0-.551.449-1 1-1h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c.551 0 1 .449 1 1 0 .551-.449 1-1 1h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
