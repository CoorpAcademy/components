import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.414 4H4c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8.586L17.414 4zM4 18V6h12v4h4l.001 8H4z" />
      <Path d="M10.006 14.475l-1.527-2.452L6 16h12l-4.472-7.173z" />
    </G>
  </Svg>
);

export default SvgComponent;
