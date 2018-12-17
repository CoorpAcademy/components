import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 17H7v-3H5v4a1 1 0 0 0 1 1h2v1H4v-7h3v-2H4V6h1v4h2V6h3V4H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM21 4h-7v2h6v5h-4V9h1v1h2V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3h-3v2h9v4h-2v2h2v1h-3v-4h2v-2h-3a1 1 0 0 0-1 1v5h-1v2h7a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
      <Path d="M12 14h-2v-4h2a1 1 0 0 0 1-1V3h2l-3-3-3 3h2v5H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v8h2v-9a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
