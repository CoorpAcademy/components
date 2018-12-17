import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3.246 9h13.508l-.223 1h2.049l.222-1H20V7h-3.42L12.868.504l-1.736.992L14.277 7H5.723l3.146-5.504L7.132.504 3.42 7H0v2h1.198l1.825 8.217A1 1 0 0 0 4 18h6v-2H4.803L3.246 9z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.795-4 4-4s4 1.794 4 4-1.795 4-4 4a3.966 3.966 0 0 1-2.828-1.172L17 19h-5v5l1.758-1.757A5.952 5.952 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
