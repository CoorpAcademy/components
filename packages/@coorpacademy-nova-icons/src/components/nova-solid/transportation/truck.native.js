import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <G fill="currentColor">
      <Circle cx={18} cy={19} r={2} />
      <Circle cx={6} cy={19} r={2} />
      <Path d="M9 3h2v1H9zM23 14H11V5H9v3H4a2 2 0 0 0-2 2v4a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h2a3.001 3.001 0 0 1 6 0h6a3.001 3.001 0 0 1 6 0h1a2 2 0 0 0 2-2v-2a1 1 0 0 0-1-1zM7 13H4v-3h3v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
