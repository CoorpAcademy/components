import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M11 8h2V5h3V3H8v2h3zM16 9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2v1h2v-1h4v1h2v-1a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm0 4v2h-1v-2H8v-1h8v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
