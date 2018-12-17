import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 10.007V4.59L13.414.004H2c-1.103 0-2 .898-2 2v18c0 1.102.897 2 2 2h12v-9.997c0-1.1.9-2 2-2h2zm-5.368 1.259L10 10.389v6.112a2.5 2.5 0 1 1-2-2.45V7.614l5.265 1.755-.633 1.897zM12 6.004v-5l5 5h-5z" />
      <Path d="M21 17.008h-2a1.001 1.001 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.345-3 3 0 1.654 1.346 3 3 3h2a1 1 0 1 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
