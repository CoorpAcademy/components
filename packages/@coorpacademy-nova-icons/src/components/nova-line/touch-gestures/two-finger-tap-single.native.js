import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.5 10c.67 0 1.321.15 1.936.444l.798.383.477-.746A4.481 4.481 0 0 1 14.5 8a4.515 4.515 0 0 1 4.409 3.593l1.959-.401A6.521 6.521 0 0 0 14.5 6c-1.943 0-3.75.856-4.978 2.327a6.494 6.494 0 0 0-8.003 3.624l1.84.785A4.496 4.496 0 0 1 7.5 10z" />
      <Path d="M14.5 10c-1.949 0-3.596 1.253-4.22 2.989A4.458 4.458 0 0 0 7.5 12 4.505 4.505 0 0 0 3 16.5V24h16v-9.5c0-2.481-2.019-4.5-4.5-4.5zM10 22H5v-5.5C5 15.122 6.122 14 7.5 14s2.5 1.122 2.5 2.5V22zm7 0h-5v-7.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5V22z" />
      <Path d="M7.5 15c-.827 0-1.5.673-1.5 1.5V18h3v-1.5c0-.827-.673-1.5-1.5-1.5zM14.5 13c-.827 0-1.5.673-1.5 1.5V16h3v-1.5c0-.827-.673-1.5-1.5-1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
