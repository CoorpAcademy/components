import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={6} cy={8} r={3} />
      <Circle cx={16} cy={18} r={3} />
      <Path d="M14 3v2h3.586L2.293 20.293l1.414 1.413L19 6.415V10h2V3z" />
    </G>
  </Svg>
);

export default SvgComponent;
