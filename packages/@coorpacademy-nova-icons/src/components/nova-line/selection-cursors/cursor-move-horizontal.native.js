import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Circle cx={12} cy={12} r={2} fill="currentColor" />
    <Path
      fill="currentColor"
      d="M18 16.415L16.586 15l3-3-3-3L18 7.586 22.414 12zM6 16.415L1.586 12 6 7.586 7.414 9l-3 3 3 3z"
    />
  </Svg>
);

export default SvgComponent;
