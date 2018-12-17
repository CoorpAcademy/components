import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 16.002c0-.356.035-.702.086-1.044L5 17V9l5.461 2.733A6.982 6.982 0 0 1 18 9.295V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h10.406A6.988 6.988 0 0 1 9 16.002zM12 1l5 5h-5V1z" />
      <Path d="M20.167 18.754A4.96 4.96 0 0 0 21 16.002c0-2.757-2.243-5-5-5s-5 2.243-5 5c0 2.756 2.243 5 5 5 1.018 0 1.963-.31 2.753-.834L22 23.415l1.414-1.413-3.247-3.248zM16 19.002c-1.654 0-3-1.347-3-3 0-1.655 1.346-3 3-3s3 1.345 3 3c0 1.653-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
