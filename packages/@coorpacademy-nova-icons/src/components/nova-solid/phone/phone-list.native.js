import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={4} r={1} />
      <Path d="M15 3h7v2h-7z" />
      <Circle cx={12} cy={8} r={1} />
      <Path d="M15 7h7v2h-7z" />
      <Circle cx={12} cy={12} r={1} />
      <Path d="M15 11h7v2h-7z" />
      <Path d="M13 22h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1c-4 0-6.937-3.062-7-7h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v5c0 6.075 4.925 11 11 11z" />
    </G>
  </Svg>
);

export default SvgComponent;
