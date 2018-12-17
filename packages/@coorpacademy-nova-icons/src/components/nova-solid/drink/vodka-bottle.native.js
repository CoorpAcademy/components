import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 5h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1zM14 8.275V6h-4v2.275C8.654 8.784 6 10.15 6 13v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8c0-2.85-2.654-4.216-4-4.725zM15.001 16h-6v-4h6v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
