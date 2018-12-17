import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.104 0 2-.897 2-2V4c0-1.103-.896-2-2-2zM8 6V4h3v2H8zM3 4h3v2H3V4zm17.997 16H3V8h17.999l-.002 12zM21 6h-8V4h8v2z" />
      <Path d="M16.984 10H7.016L12 12.848z" />
      <Path d="M7 18h10a1 1 0 0 0 1-1v-5.277l-5.504 3.146a1.003 1.003 0 0 1-.992 0L6 11.723V17a1 1 0 0 0 1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
