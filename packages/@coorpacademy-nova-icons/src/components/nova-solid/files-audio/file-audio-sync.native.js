import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 10.008V4.59L13.414.004H2c-1.103 0-2 .898-2 2v18c0 1.102.897 2 2 2h9.077A7.951 7.951 0 0 1 10 18.008a8 8 0 0 1 8-8zm-6-9.004l5 5h-5v-5zM7.5 19.001a2.5 2.5 0 1 1 .5-4.95V7.614l5.265 1.755-.633 1.897L10 10.389v6.112a2.5 2.5 0 0 1-2.5 2.5z" />
      <Path d="M18 12.008c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.078 0-2.065-.441-2.811-1.189L17 19.008h-5v5l1.761-1.761A5.936 5.936 0 0 0 18 24.008c3.309 0 6-2.692 6-6 0-3.309-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
