import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM12 18a5 5 0 1 1 0-10 5 5 0 1 1 0 10zm8-12H4V5h16v1z" />
      <Path d="M13 9h-2v5h4v-2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
