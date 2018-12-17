import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.719 12.018H12v-4h2v3.077a7.955 7.955 0 0 1 4-1.079V4.602L13.414.015H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h9.079a7.967 7.967 0 0 1 1.64-9.997zM12 1.015l5 5h-5v-5zM3 8.018h2v4H3v-4zm3 9.997H3v-4h3v4zm1-9.997h3v4H7v-4zm1 5.997h2v4H8v-4z" />
      <Path d="M18 12c-3.309 0-6 2.692-6 6s2.691 6 6 6 6-2.692 6-6-2.691-6-6-6zm3 7h-4v-5h2v3h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
