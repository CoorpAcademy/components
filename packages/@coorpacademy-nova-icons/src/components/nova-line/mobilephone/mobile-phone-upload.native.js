import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 4h-1.997v2H17v2h-2v2h2v8H7v-8h2V8H7V6h2.003V4H7c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2V6c0-1.104-.897-2-2-2zM7 22v-2h10v2H7z" />
      <Path d="M11 7h2v2h-2zM11 6h2V3h2l-3-3-3 3h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
