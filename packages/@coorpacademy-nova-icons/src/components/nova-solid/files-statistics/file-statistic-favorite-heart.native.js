import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.293 15.707L8 13.414l-3 3V17h8.294A7.007 7.007 0 0 1 18 12.294V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h11.683A6.966 6.966 0 0 1 13 19H3V8h2v5.586l2.293-2.293a.999.999 0 0 1 1.414 0L11 13.586l2.293-2.293 1.414 1.413-3 3a.998.998 0 0 1-1.414.001zM12 6V1l5 5h-5zM22 16.001c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .896-2 2c0 3.001 4 6.001 4 6.001s4-3 4-6.001a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
