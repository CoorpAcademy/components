import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle fill="currentColor" cx={12} cy={12.002} r={10} />
  </Svg>
);

export default SvgComponent;
