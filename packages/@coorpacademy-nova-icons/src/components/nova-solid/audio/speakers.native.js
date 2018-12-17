import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={9.003} r={2} />
      <Path d="M13.414 16.003H17c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h3.586l-6 6h2.828L11 18.417v3.586h2v-3.586l3.586 3.586h2.828l-6-6zM7 9.003c0-2.762 2.238-5 5-5s5 2.238 5 5-2.238 5-5 5-5-2.238-5-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
