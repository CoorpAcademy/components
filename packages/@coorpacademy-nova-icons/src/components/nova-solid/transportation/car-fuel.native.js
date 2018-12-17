import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 16H4l2-4h6.349A5.975 5.975 0 0 1 12 10H5l-4 7v5h2a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h2v-5l-.81-1.418A5.971 5.971 0 0 1 18 16zM8 20H3v-2h5v2zm11 0h-5v-2h5v2z" />
      <Path d="M18 14a4 4 0 0 0 4-4c0-3-4-8-4-8s-4 5-4 8a4 4 0 0 0 4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
