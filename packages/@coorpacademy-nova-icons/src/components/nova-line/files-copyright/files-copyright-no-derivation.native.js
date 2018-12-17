import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 2.008h10v4h4v.981h2V4.594L13.414.009H2c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h6v-2H2V2.008z" />
      <Path d="M16.5 9C12.364 9 9 12.365 9 16.5c0 4.136 3.364 7.5 7.5 7.5s7.5-3.364 7.5-7.5c0-4.135-3.364-7.5-7.5-7.5zm0 13a5.506 5.506 0 0 1-5.5-5.5c0-3.031 2.467-5.5 5.5-5.5s5.5 2.469 5.5 5.5c0 3.033-2.467 5.5-5.5 5.5z" />
      <Path d="M14 14h5v2h-5zM14 17h5v2h-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
