import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1h2v1a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 9h-1c-3.309 0-6-2.691-6-6V4h7v7zm0 3h-1v-1h1v1zM11 4v1c0 3.309-2.691 6-6 6H4V4h7zm-7 9h1v1H4v-1zm5 7H4v-4h2c1.654 0 3 1.346 3 3v1zm4.102-2h-2.203A5.012 5.012 0 0 0 7 14.102v-1.365a8.024 8.024 0 0 0 5-3.872 8.03 8.03 0 0 0 5 3.872v1.365A5.01 5.01 0 0 0 13.102 18zM15 20v-1c0-1.654 1.346-3 3-3h2v4h-5z" />
      <Path d="M10 5H8c0 1.343-1.438 2.102-1.447 2.106l.895 1.789C7.551 8.843 10 7.588 10 5zM16.553 8.895l.9-1.786C17.439 7.102 16 6.343 16 5h-2c0 2.588 2.45 3.843 2.553 3.895z" />
    </G>
  </Svg>
);

export default SvgComponent;
