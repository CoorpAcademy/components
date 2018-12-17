import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M14.858 15c.084.321.142.652.142 1a4 4 0 1 1-4-4c.347 0 .678.059.999.142L12 9.067A8.7 8.7 0 0 0 11 9C4.648 9 0 16 0 16s4.648 7 11 7 11-7 11-7-.269-.4-.751-1h-6.391z" />
      <Path d="M22.999 4c0-2.206-1.794-4-4-4s-4 1.794-4 4A.998.998 0 0 0 14 5v7c0 .553.446 1 .999 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zM22 11h-6.001V6H22v5z" />
      <Circle cx={19} cy={8} r={1} />
      <Circle cx={11} cy={16} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
