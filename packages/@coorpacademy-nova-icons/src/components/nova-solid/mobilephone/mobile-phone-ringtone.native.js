import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 17v1H4V6h8v1h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3h-2z" />
      <Path d="M19 13a1 1 0 0 1-1-1v-2a2 2 0 0 0-4 0v2a1 1 0 0 1-1 1v1h6v-1zM16 16a1 1 0 0 0 1-1h-2a1 1 0 0 0 1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
