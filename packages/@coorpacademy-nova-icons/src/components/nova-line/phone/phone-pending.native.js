import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={12} cy={11} r={1.5} fill="currentColor" />
    <Circle cx={16} cy={11} r={1.5} fill="currentColor" />
    <Circle cx={20} cy={11} r={1.5} fill="currentColor" />
    <Path
      d="M18 23h-5C6.384 23 1 17.617 1 11V6c0-1.104.897-2 2-2h4c1.103 0 2 .896 2 2v4a2.003 2.003 0 0 1-1.908 1.998c.437 2.584 2.367 4.52 4.909 4.924A2.004 2.004 0 0 1 14 15h4c1.103 0 2 .896 2 2v4a2 2 0 0 1-2 2zM3 6v5c0 5.514 4.486 10 10 10h5.001L18 17h-4v1a1 1 0 0 1-1 1c-4.488 0-7.928-3.433-8-7.984A1.005 1.005 0 0 1 6 10h1V6H3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
