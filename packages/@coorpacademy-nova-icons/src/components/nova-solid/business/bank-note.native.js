import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 5v14h20V5H2zm7 12l-5-5V7h11l5 5v5H9z" />
      <Circle cx={12} cy={12} r={3} />
    </G>
  </Svg>
);

export default SvgComponent;
