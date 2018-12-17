import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 5.002h-3v-3h-2v3h-3v2h3v3h2v-3h3zM10 5.002a3 3 0 1 0-6 0v9.168a4.469 4.469 0 0 0-1.5 3.332 4.5 4.5 0 0 0 9 0A4.469 4.469 0 0 0 10 14.17V5.002zm-3 15a2.5 2.5 0 0 1-1-4.789V9.002h2v6.211a2.5 2.5 0 0 1-1 4.789z" />
    </G>
  </Svg>
);

export default SvgComponent;
