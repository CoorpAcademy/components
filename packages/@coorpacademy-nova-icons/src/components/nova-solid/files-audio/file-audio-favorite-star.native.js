import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 11.008V4.59L13.414.004H2c-1.103 0-2 .898-2 2v18c0 1.102.897 2 2 2h10.257A6.962 6.962 0 0 1 11 18.008a7 7 0 0 1 7-7zM12 1.004l5 5h-5v-5zm-2 15.497a2.5 2.5 0 1 1-2-2.45V7.615l5.265 1.754-.633 1.897L10 10.389v6.112z" />
      <Path d="M24 16.294h-4.286L18 12.008l-1.715 4.286H12l3.708 3.13-1.994 4.584L18 21.174l4.285 2.834-1.993-4.584z" />
    </G>
  </Svg>
);

export default SvgComponent;
