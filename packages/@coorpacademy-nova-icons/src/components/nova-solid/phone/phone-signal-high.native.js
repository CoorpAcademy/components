import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.001 19a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2zM14 12a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-9zM21 5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5z" />
    </G>
  </Svg>
);

export default SvgComponent;
