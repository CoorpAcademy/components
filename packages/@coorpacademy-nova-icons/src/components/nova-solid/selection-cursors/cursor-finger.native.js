import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19.275 12.04L13 10.247V3.001a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v8H5a1 1 0 0 0-.95 1.317l3 9c.138.409.519.683.95.683h9c.459 0 .859-.312.971-.757l2-8a1 1 0 0 0-.696-1.204z"
    />
  </Svg>
);

export default SvgComponent;
