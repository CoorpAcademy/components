import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path fill="currentColor" d="M3 11.001h18v2H3z" />
  </Svg>
);

export default SvgComponent;
