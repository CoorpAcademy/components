import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.051 11.371l2.949-.37-16-7 .897 2.052zM10.896 13.897l-.126 1.007L13 20.001l.809-6.468z" />
    </G>
    <Path fill="currentColor" d="M2 5.001l7 16 1-8 8-1z" />
  </Svg>
);

export default SvgComponent;
