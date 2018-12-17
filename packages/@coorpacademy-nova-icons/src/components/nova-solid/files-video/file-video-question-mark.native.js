import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 16.002a5.995 5.995 0 0 1 4-5.651V4.586L13.414.001H2c-1.103 0-2 .897-2 2v18c0 1.102.897 2 2 2h14c.366 0 .705-.106 1-.277v-.531a5.994 5.994 0 0 1-3-5.191zM12 1l5 5h-5V1zM5 17V9l8 4.002L5 17z" />
      <Path d="M20 12.002c-2.206 0-4 1.793-4 4h2c0-1.103.897-2 2-2s2 .897 2 2c0 1.102-.897 2-2 2h-1v3h2v-1.128a4.006 4.006 0 0 0 3-3.872c0-2.207-1.794-4-4-4z" />
      <Circle cx={20} cy={22.996} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
