import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 11.002V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10.258A6.96 6.96 0 0 1 11 18.002a7 7 0 0 1 7-7zM12 1l5 5h-5V1zM5 9l8 4.003L5 17V9z" />
      <Path d="M24 16.287h-4.286L18 12.002l-1.715 4.285H12l3.708 3.131-1.994 4.584L18 21.167l4.285 2.835-1.993-4.584z" />
    </G>
  </Svg>
);

export default SvgComponent;
