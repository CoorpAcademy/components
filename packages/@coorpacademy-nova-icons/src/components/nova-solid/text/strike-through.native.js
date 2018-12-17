import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 11H3v2h9c1.654 0 3 1.346 3 3s-1.346 3-3 3H9v-1H7v2a1 1 0 0 0 1 1h4c2.757 0 5-2.243 5-5 0-1.13-.391-2.162-1.025-3H21v-2zM9.185 9A2.943 2.943 0 0 1 9 8c0-1.654 1.346-3 3-3h2v1h2V4a1 1 0 0 0-1-1h-3a5.006 5.006 0 0 0-4.899 6h2.084z" />
    </G>
  </Svg>
);

export default SvgComponent;
