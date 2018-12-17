import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={3} r={3} />
      <Path d="M24 10h-8.142C15.412 8.277 13.861 7 12 7s-3.412 1.277-3.858 3H0v2h1v12h2V12h18v12h2V12h1v-2z" />
      <Path d="M17 19h1a1 1 0 0 0 .555-1.832l-6-4a1.003 1.003 0 0 0-1.109 0l-6 4A1 1 0 0 0 6 19h1v3H5v2h14v-2h-2v-3zm-2 3h-2v-3h2v3zm-6-3h2v3H9v-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
