import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 16V8h10V4c0-1.104-.897-2-2-2H6c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-4H6zM6 4h8v2H6V4zm8.001 16H6v-2h8.001v2z" />
      <Path d="M23 11h-3V8h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
