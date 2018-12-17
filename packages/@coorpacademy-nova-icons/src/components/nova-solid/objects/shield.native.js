import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.478 10-10S17.523 2 12 2zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
      <Path d="M13 11l-1-3-1 3H8l2 2-1 3 3-2 3 2-1-3 2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
