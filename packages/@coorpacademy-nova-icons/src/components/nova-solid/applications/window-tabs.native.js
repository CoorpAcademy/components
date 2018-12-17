import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 18H6v2c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2v-6h-4v4zM22 8h-2v4h4v-2a2 2 0 0 0-2-2z" />
      <Path d="M18 14V8H0v6c0 1.102.896 2 2 2h14c1.104 0 2-.898 2-2zM18 4c0-1.103-.896-2-2-2H2C.896 2 0 2.897 0 4v2h18V4zM3 4.998a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
