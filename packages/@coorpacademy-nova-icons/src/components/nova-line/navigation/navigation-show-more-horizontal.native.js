import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={5} cy={12} r={2} />
      <Circle cx={12} cy={12} r={2} />
      <Circle cx={19} cy={12} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
