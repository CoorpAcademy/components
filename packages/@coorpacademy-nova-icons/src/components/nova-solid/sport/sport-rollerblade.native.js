import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M6 16h13a1 1 0 0 0 1-1c0-2.209-2-5-5-5h-3V9H8V7h4V5H8V3h4V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8l-1 4a2 2 0 0 0 2 2zM5 17c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM12 17c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM19 17c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
