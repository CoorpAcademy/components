import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 17h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
      <Path d="M3 3h14v9h2V3c0-1.102-.897-2-2-2H3c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h9v-2H3V3z" />
    </G>
  </Svg>
);

export default SvgComponent;
