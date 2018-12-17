import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.691 14l1.111-5H20V7h-3.42L12.868.503l-1.736.992L14.277 7H5.723l3.146-5.504L7.132.504 3.42 7H0v2h1.197l1.826 8.217A1 1 0 0 0 4 18h9v-2H4.803L3.246 9h13.508l-1.111 5h2.048zM24 19h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
