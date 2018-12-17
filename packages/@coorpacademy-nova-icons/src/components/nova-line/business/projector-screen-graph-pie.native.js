import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM4 5h16v1H4V5zm15 13H5V8h14v10z" />
      <Path d="M9 16a3 3 0 0 0 3-3H9v-3a3.001 3.001 0 0 0 0 6z" />
      <Path d="M10 9v3h3a3 3 0 0 0-3-3zM15 9h3v2h-3zM14 12h4v2h-4zM12 15h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
