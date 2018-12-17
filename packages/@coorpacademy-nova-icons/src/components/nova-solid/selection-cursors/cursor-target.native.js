import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M14 12.002a2 2 0 1 1-3.999.001A2 2 0 0 1 14 12.002zM11 2.001h2v6h-2zM11 16.001h2v6h-2zM2 11.002h6v2H2zM16 11.002h6v2h-6z"
    />
  </Svg>
);

export default SvgComponent;
