import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M3 8h2v8H3zM8 3h8v2H8zM8 19h8v2H8zM19 8h2v8h-2z" />
      <Circle cx={20} cy={4} r={2} />
      <Circle cx={4} cy={4} r={2} />
      <Circle cx={20} cy={20} r={2} />
      <Circle cx={4} cy={20} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
