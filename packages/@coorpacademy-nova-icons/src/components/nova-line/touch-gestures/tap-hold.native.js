import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 2c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
      <Path d="M19 5h-2v2.414l1.293 1.293 1.414-1.414L19 6.586zM7.5 12A4.505 4.505 0 0 0 3 16.5V24h9v-7.5c0-2.481-2.019-4.5-4.5-4.5zM10 22H5v-5.5C5 15.122 6.122 14 7.5 14s2.5 1.122 2.5 2.5V22z" />
      <Path d="M7.5 15c-.827 0-1.5.673-1.5 1.5V18h3v-1.5c0-.827-.673-1.5-1.5-1.5zM7.5 8a7.471 7.471 0 0 0-7.296 5.758l1.945.463A5.48 5.48 0 0 1 7.5 10a5.475 5.475 0 0 1 5.355 4.241l1.947-.456A7.467 7.467 0 0 0 7.5 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
