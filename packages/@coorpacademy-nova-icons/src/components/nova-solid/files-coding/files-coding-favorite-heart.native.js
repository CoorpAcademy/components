import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h11.683A6.962 6.962 0 0 1 13 19c0-.34.033-.673.08-1H12v-4h2v1.408a7.012 7.012 0 0 1 4-3.114V4.586zM3 8.003h2v4H3v-4zM6 18H3v-4h3v4zm4 0H8v-4h2v4zm0-5.997H7v-4h3v4zm4 0h-2v-4h2v4zM12 6V1l5 5h-5zM22 16.001c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .895-2 2c0 3 4 6 4 6s4-3 4-6a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
