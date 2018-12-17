import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 7.003h2v2h-2zM7 11.003h2v2H7zM11 11.003h2v2h-2zM11 15.003h2v2h-2zM15 11.003h2v2h-2z" />
      <Path d="M3 3.003v18h18v-18H3zm16 16H5v-14h14v14z" />
    </G>
  </Svg>
);

export default SvgComponent;
