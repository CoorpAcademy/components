import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 12.05a2.5 2.5 0 1 0 2 2.45V9.388l2.633.877.633-1.898L8 6.612v5.438z" />
      <Path d="M2 2h10v4h4l.001 8.005H18V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12v-2H2V2zM21 19v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
