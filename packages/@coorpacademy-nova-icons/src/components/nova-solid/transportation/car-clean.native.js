import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M18 9H6l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5l-4-7zM7 11h10l2 4H5l2-4zm2 8H4v-2h5v2zm11 0h-5v-2h5v2z" />
      <Circle cx={12} cy={2} r={1} />
      <Circle cx={10} cy={4.5} r={1} />
      <Circle cx={14} cy={4.5} r={1} />
      <Circle cx={12} cy={7} r={1} />
      <Circle cx={8} cy={7} r={1} />
      <Circle cx={16} cy={7} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
