import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.001h-24z" />
    <G fill="currentColor">
      <Circle cx={14} cy={9} r={1} />
      <Circle cx={10} cy={9} r={1} />
      <Path d="M18 3H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h2.875L12 23l3.125-5H18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 9h-2v2a1 1 0 0 1-1 1v-2h-1v2h-2v-2h-1v2a1 1 0 0 1-1-1v-2H7v-2c0-2.762 2.238-5 5-5s5 2.238 5 5v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
