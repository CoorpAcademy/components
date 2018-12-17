import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 7h2v2h-2zM7 11h2v2H7zM11 11h2v2h-2zM11 15h2v2h-2zM15 11h2v2h-2z" />
      <Path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
    </G>
  </Svg>
);

export default SvgComponent;
