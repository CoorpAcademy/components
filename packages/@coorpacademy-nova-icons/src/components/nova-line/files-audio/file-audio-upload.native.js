import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 12.05a2.5 2.5 0 1 0 2 2.45V9.388l2.633.877.633-1.898L8 6.612v5.438z" />
      <Path d="M2 2h10v4h4l.001 6H18V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10v-2H2V2zM19 14.585l-4.707 4.707 1.414 1.414L18 18.413V24h2v-5.587l2.293 2.293 1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
