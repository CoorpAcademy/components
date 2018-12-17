import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 12.05a2.5 2.5 0 1 0 2 2.45V9.388l2.632.877.633-1.898L8 6.612v5.438z" />
      <Path d="M18 4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12v-2H2V2h10v4h4l.001 11.005H18V4.586zM17 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
