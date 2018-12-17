import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21 7h-8v6h8V7zm-4 4a1 1 0 1 1-.002-1.998A1 1 0 0 1 17 11zM3 13h8V7H3v6zm4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM21 2H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM3 14v8h2v-3h14v3h2v-8H3zm9 3a1 1 0 1 1-.002-1.998A1 1 0 0 1 12 17z" />
    </G>
  </Svg>
);

export default SvgComponent;
