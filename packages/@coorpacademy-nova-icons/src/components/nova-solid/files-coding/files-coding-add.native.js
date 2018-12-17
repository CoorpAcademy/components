import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 14.35V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h12.348A5.99 5.99 0 0 1 14 20.001a5.997 5.997 0 0 1 4-5.651zM12 1l5 5h-5V1zM3 8.003h2v4H3v-4zM6 18H3v-4h3v4zm4 0H8v-4h2v4zm0-5.997H7v-4h3v4zM14 18h-2v-4h2v4zm0-5.997h-2v-4h2v4zM21 19.001v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
