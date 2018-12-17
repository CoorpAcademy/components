import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.001 15.006h-1v-7h-2v7H4v2h6v-5H8.001z" />
      <Path d="M2 2.002h10v4h4L16.001 10H18V4.588L13.414.003H2c-1.103 0-2 .897-2 2v18.001c0 1.103.897 2 2 2h8v-2H2V2.002z" />
      <Path d="M18 12.002c-3.309 0-6 2.691-6 6h2c0-2.206 1.795-4 4-4 2.206 0 4 1.794 4 4s-1.794 4-4 4c-1.069 0-2.073-.416-2.779-1.12l-.047-.053L17 19.002h-5v5l1.758-1.757A5.957 5.957 0 0 0 18 24.002c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
