import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 16.514c-1.424.306-3.087.486-5 .486-4.176 0-7.191-.843-9-2.032V16c0 2.626 4.527 4 9 4 1.752 0 3.507-.214 5-.628v-2.858zM9 15c2.072 0 3.713-.209 5-.521v-2.966c-1.424.307-3.087.487-5 .487-4.176 0-7.191-.843-9-2.032V12c0 .769 2.216 3 9 3zM9 10c6.784 0 9-2.231 9-3V4.968C16.191 6.157 13.176 7 9 7s-7.191-.843-9-2.032V7c0 .769 2.216 3 9 3z" />
      <Path d="M9 5c5.195 0 7.705-1.307 8.6-2.265C16.404.936 12.688 0 9 0S1.596.936.4 2.735C1.295 3.693 3.805 5 9 5zM21 17h-2a1 1 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1 1 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
