import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path fill="currentColor" d="M21 11.001h-8v-8h-2v8H3v2h8v8h2v-8h8z" />
  </Svg>
);

export default SvgComponent;
