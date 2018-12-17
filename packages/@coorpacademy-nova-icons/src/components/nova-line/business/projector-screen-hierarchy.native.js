import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM4 5h16v1H4V5zm15 13H5V8h14v10z" />
      <Path d="M9 14h2v1h-1v2h4v-2h-1v-1h2v3h3v-2h-1v-2a1 1 0 0 0-1-1h-3v-1h1V9h-4v2h1v1H8a1 1 0 0 0-1 1v2H6v2h3v-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
