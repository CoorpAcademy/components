import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 6H8a1 1 0 0 0-1 1v2h2V8h2v8H9v2h6v-2h-2V8h2v1h2V7a1 1 0 0 0-1-1z" />
      <Path d="M23 6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1H6V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v12H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1h12v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1V6h1zm-3-4h2v2h-2V2zM2 2h2v2H2V2zm2 20H2v-2h2v2zm18 0h-2v-2h2v2zm-2-4h-1a1 1 0 0 0-1 1v1H6v-1a1 1 0 0 0-1-1H4V6h1a1 1 0 0 0 1-1V4h12v1a1 1 0 0 0 1 1h1v12z" />
    </G>
  </Svg>
);

export default SvgComponent;
