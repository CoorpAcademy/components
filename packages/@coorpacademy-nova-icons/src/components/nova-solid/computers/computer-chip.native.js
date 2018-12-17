import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.281 12H16v-2h-1.219z" />
      <Path d="M23 8V6h-2a2 2 0 0 0-2-2h-1V2h-2v2h-3V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2H1v2h2v3H1v2h2v3H1v2h2a2 2 0 0 0 2 2h1v2h2v-2h3v2h2v-2h3v2h2v-2h1a2 2 0 0 0 2-2h2v-2h-2v-3h2v-2h-2V8h2zm-12 2H7v1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h5v2zm8 4h-1v2h-2v-2h-3a.998.998 0 0 1-.97-1.242l1-4A.999.999 0 0 1 14 8h3a1 1 0 0 1 1 1v3h1v2z" />
      <Path d="M7 13h2v1H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
