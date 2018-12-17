import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.143 17L19 5l-2-2L2 17v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2H6.143zM14 20a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      <Path d="M10 16h11v-2h-9z" />
    </G>
  </Svg>
);

export default SvgComponent;
