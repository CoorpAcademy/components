import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.808 19H3l3-4 2 2 4-5 2.054 4.792A5.996 5.996 0 0 1 18 10.35V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h14c.366 0 .705-.106 1-.277v-.531A6.046 6.046 0 0 1 14.808 19zM12 1l5 5h-5V1zM5.5 8a2.5 2.5 0 1 1-.002 5.002A2.5 2.5 0 0 1 5.5 8z" />
      <Path d="M20 12.001c-2.206 0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2h-1v3h2v-1.127a4.003 4.003 0 0 0 3-3.873c0-2.206-1.794-4-4-4z" />
      <Circle cx={20} cy={22.999} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
