import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 10h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4H4V4zM21 2h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 4h-2V4h2v2zM7 16H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4H4v-2h2v2zM11 2h4v2h-4zM12 9h3V7h-2V5h-2v3a1 1 0 0 0 1 1zM16 10v4a1 1 0 0 0 1 1h3v1h2v-2a1 1 0 0 0-1-1h-3v-2h4V9h-5a1 1 0 0 0-1 1zM10 15v-3a1 1 0 0 0-1-1H2v2h2v2h2v-2h2v2h2zM11 13h4v2h-4zM12 10h3v2h-3zM15 18v2h-4v-1H9v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2h5v-2h-6a1 1 0 0 0-1 1z" />
      <Path d="M12 16h2v3h-2zM9 16h2v2H9zM18 20h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
