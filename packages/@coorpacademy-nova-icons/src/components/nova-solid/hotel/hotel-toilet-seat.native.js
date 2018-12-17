import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M3 9h11v2H3z" />
      <Path d="M19 2h-2a2 2 0 0 0-2 2v8H3a5 5 0 0 0 5 5h3.5l-.39 3.9a1.003 1.003 0 0 0 .995 1.1H20a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zm-1 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
