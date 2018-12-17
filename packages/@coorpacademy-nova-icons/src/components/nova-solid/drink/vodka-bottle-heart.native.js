import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 4.999h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 .999zM14 8.275V5.999h-4v2.275c-1.346.51-4 1.875-4 4.726v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8c0-2.851-2.654-4.216-4-4.725zM12 18s-3-2-3-4c0-1 .521-2 1.521-2C12 12 12 13.979 12 13.979S12 12 13.459 12c1 0 1.541 1 1.541 2 0 2-3 4-3 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
