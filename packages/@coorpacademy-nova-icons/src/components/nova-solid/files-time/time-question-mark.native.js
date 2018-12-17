import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.88 10.394c.072-.456.12-.919.12-1.394 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a8.939 8.939 0 0 0 5.024-1.537A5.904 5.904 0 0 1 14 16a5.995 5.995 0 0 1 3.88-5.606zm-6.435 1.438L8 9.535V4h2v4.465l2.555 1.703-1.11 1.664zM20 12c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2h-1v3h2v-1.127A4.005 4.005 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <Circle cx={20} cy={23} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
