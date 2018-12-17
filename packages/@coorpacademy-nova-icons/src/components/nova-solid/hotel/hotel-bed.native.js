import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21 12h-1a1 1 0 0 0-1 1v1H5V8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h14v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z" />
      <Path d="M12 12a2 2 0 0 0-2-2H6v3h6v-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
