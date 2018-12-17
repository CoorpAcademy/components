import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 4h2v4h-2zM1 4h2v4H1z" />
      <Circle cx={6} cy={14} r={1} />
      <Circle cx={18} cy={14} r={1} />
      <Path d="M20 7.697V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3.697l-1.832 2.748A1.008 1.008 0 0 0 2 11v10c0 1.104.897 2 2 2h1c1.103 0 2-.896 2-2v-3h1.382l1 2h5.236l1-2H17v3c0 1.104.897 2 2 2h1c1.103 0 2-.896 2-2V11c0-.197-.059-.39-.168-.555L20 7.697zM19.132 10H4.868l.667-1h12.93l.667 1zM18 7h-5V5h5v2zm-7-2v2H6V5h5zM5.001 21H4v-3h1l.001 3zM19 21v-3h1l.001 3H19zM4 16v-4h16v4H4z" />
      <Path d="M9 13h6v2H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
