import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M11 16l4-4h-3V9l-4 4h3z" />
      <Path d="M21 6h-1V4h-4v2H8V4H4v2H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 11H4V8h16v9z" />
    </G>
  </Svg>
);

export default SvgComponent;
