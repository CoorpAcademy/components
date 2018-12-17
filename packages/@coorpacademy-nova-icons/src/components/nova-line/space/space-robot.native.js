import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M19 7h-2V2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5H5c-1.654 0-3 1.346-3 3v4h2v-4c0-.551.449-1 1-1h1v12H5v2h4v-2H8v-4h8v4h-1v2h4v-2h-1V9h1c.551 0 1 .449 1 1v4h2v-4c0-1.654-1.346-3-3-3zM9 3h6v4H9V3zM8 9h8v6H8V9z" />
      <Path d="M9 10h3v2H9zM10 4h4v2h-4z" />
      <Circle cx={14} cy={12} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
