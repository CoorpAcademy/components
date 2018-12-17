import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 5h-3a1 1 0 0 0-1 1v1H3V5H1v16h2v-2h17v2h2V6a1 1 0 0 0-1-1zm-1 2v2h-2V7h2zM3 16V9h2v1c0 2.762 2.238 5 5 5s5-2.238 5-5V9h2v7H3z" />
      <Path d="M13 3H7L5.5 6h9z" />
    </G>
  </Svg>
);

export default SvgComponent;
