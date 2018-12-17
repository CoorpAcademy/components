import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 3.006h2v6h-2z" />
      <Circle cx={18} cy={11.006} r={1} />
      <Path d="M8 16.006c2.206 0 4-1.795 4-4s-1.794-4-4-4-4 1.795-4 4 1.794 4 4 4zM8 17.006c-4.71 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
