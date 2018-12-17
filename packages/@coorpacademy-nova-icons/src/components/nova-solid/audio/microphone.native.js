import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={7.003} r={5} />
      <Path d="M9.365 13.486l.502 7.521C9.94 22.104 10.9 23.003 12 23.003s2.06-.898 2.133-1.996l.502-7.521a6.976 6.976 0 0 1-5.27 0zM13 17.003a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </G>
  </Svg>
);

export default SvgComponent;
