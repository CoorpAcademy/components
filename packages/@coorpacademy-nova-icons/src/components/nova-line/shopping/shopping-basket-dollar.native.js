import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3.246 9h13.508l-.223 1h2.049l.222-1H20V7h-3.42L12.868.504l-1.736.992L14.277 7H5.723l3.146-5.504L7.132.504 3.42 7H0v2h1.198l1.825 8.217A1 1 0 0 0 4 18h10v-2H4.803L3.246 9z" />
      <Path d="M21 17h-2a1.001 1.001 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1.001 1.001 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
