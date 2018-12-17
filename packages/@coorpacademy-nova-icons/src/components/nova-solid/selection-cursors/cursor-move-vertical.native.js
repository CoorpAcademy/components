import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={12} r={2} />
      <Path d="M12 2L8 7.001h8zM12 22l-4-5h8z" />
    </G>
  </Svg>
);

export default SvgComponent;
