import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M19 5a1 1 0 0 0-1-1h-8V2H7v2H6a1 1 0 0 0-1 1v4h14V5zM4 16v2h1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h1v-2H4zM4 10v2h1v3h14v-3h1v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
