import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 2v2H2V2h8zm0 4l.001 8H2V6h8zM2 18v-2h8.002v2H2zM21 17h-2c-.551 0-1-.449-1-1s.449-1 1-1h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c.551 0 1 .449 1 1s-.449 1-1 1h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
