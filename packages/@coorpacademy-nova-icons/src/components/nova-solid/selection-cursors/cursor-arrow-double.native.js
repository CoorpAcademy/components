import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.051 11.371L22 11.002l-16-7 .898 2.051zM10.896 13.898l-.127 1.006L13 20.001l.809-6.468z" />
      <Path d="M10 13.002l8-1-16-7 7 15.999z" />
    </G>
  </Svg>
);

export default SvgComponent;
