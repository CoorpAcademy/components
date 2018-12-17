import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M19.532 13.023A9.994 9.994 0 0 0 14 .838V4h-3v3h3v3l-3 1-2 5-5-3V7l3-2V.46C2.943 1.734 0 5.523 0 10c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 4.008-.841C14.007 19.106 14 19.054 14 19a5.998 5.998 0 0 1 5.532-5.977z" />
      <Path d="M22 16c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .895-2 2c0 3 4 6 4 6s4-3 4-6a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
