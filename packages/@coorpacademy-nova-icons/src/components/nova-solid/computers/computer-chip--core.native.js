import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 10h2v1h-2zM11 13h2v1h-2z" />
      <Path d="M22 8V6h-2a2 2 0 0 0-2-2h-1V2h-2v2h-2V2h-2v2H9V2H7v2H6a2 2 0 0 0-2 2H2v2h2v3H2v2h2v3H2v2h2a2 2 0 0 0 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1a2 2 0 0 0 2-2h2v-2h-2v-3h2v-2h-2V8h2zm-7 7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
