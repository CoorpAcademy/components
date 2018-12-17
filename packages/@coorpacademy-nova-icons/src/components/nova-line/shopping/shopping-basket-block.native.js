import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3.246 9h13.508l-.223 1h2.049l.223-1H20V7h-3.42L12.868.503l-1.736.992L14.277 7H5.723l3.146-5.504L7.132.504 3.42 7H0v2h1.197l1.826 8.217A1 1 0 0 0 4 18h6v-2H4.803L3.246 9z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.74 0 1.424.215 2.02.567l-5.453 5.452A3.947 3.947 0 0 1 14 18c0-2.206 1.795-4 4-4zm0 8c-.74 0-1.424-.215-2.02-.567l5.453-5.452A3.95 3.95 0 0 1 22 18c0 2.206-1.795 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
