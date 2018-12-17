import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={12.002} r={2} />
      <Path d="M12 2.001L8 7.002h8zM12 22.001l-4-5h8zM22 12.002l-5-4v7.999zM2 12.002l5-4v7.999z" />
    </G>
  </Svg>
);

export default SvgComponent;
