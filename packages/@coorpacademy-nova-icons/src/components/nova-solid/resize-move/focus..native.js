import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 5h3V3H3c-1.104 0-2 .897-2 2v3h2V5zM21 3h-3v2h3v3h2V5c0-1.103-.896-2-2-2zM3 16H1v3a2 2 0 0 0 2 2h3v-2H3v-3zM21 19h-3v2h3a2 2 0 0 0 2-2v-3h-2v3zM5 7h14v10H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
