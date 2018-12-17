import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 16h4v-4H4V8h4V4h4v4h4V4h4v4h-4v4h4v4h-4v4h-4v-4H8v4H4v-4z" />
      <Path d="M8 8h4v4H8zM12 12h4v4h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
