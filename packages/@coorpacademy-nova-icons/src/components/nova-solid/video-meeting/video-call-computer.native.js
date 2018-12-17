import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 5V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7l3 1V4l-3 1z" />
      <Circle cx={11} cy={10} r={2} />
      <Path d="M19 11v5h-5c0-1.841-1.159-3-3-3s-3 1.159-3 3H3V7h10V5H3c-1.103 0-2 .897-2 2v11c0 1.104.897 2 2 2h7v2H6v2h10v-2h-4v-2h7c1.103 0 2-.896 2-2v-7h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
