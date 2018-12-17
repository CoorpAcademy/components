import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.998 15v3H7.665l-2.667 2v-2h-3V9h10V7h-10c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-3h-2z" />
      <Path d="M22.998 4c0-2.205-1.794-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .896 2 2h-4c0-1.104.897-2 2-2zm3 9h-6V6h6v5z" />
      <Circle cx={18.998} cy={8} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
