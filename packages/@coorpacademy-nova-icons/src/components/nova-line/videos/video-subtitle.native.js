import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 11v2c0 1.654 1.346 3 3 3h2v-2H9c-.551 0-1-.448-1-1v-2c0-.551.449-1 1-1h2V8H9c-1.654 0-3 1.346-3 3zM13 11v2c0 1.654 1.346 3 3 3h2v-2h-2c-.551 0-1-.448-1-1v-2c0-.551.449-1 1-1h2V8h-2c-1.654 0-3 1.346-3 3z" />
      <Path d="M20 4H4c-1.103 0-2 .896-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.104-.897-2-2-2zM4 18V6h16l.001 12H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
