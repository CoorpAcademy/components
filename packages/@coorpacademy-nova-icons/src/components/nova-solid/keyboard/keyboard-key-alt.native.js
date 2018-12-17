import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 9.998h2V12H5z" />
      <Path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM9 16H7v-2H5v2H3V8.998a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V16zm6 0h-5V8h2v6h3v2zm6-6h-2v6h-2v-6h-2V8h6v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
