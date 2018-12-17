import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 5H4c-1.102 0-2 .897-2 2v6c0 1.102.897 2 2 2h6v-2H4V7h16v8c1.103 0 2-.898 2-2V7c0-1.103-.896-2-2-2z" />
      <Circle cx={7} cy={10} r={2} />
      <Circle cx={12} cy={10} r={2} />
      <Circle cx={17} cy={10} r={2} />
      <Path d="M16 23l1-5 5-1-10-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
