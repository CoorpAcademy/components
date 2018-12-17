import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={12} r={2} />
      <Path d="M2 12l5 4V8zM22 12l-5 4V8z" />
    </G>
  </Svg>
);

export default SvgComponent;
