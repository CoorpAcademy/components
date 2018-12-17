import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 14h2v1h2v-1h1v-3H2v2h3z" />
      <Path d="M21 3H6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5v9H2v2h20V4a1 1 0 0 0-1-1zM8.5 7.999a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 8.5 7.999zM20 19h-3v-5a2 2 0 0 1 2-2h1v7zm0-11.001h-4v-1h4v1zm0-2h-4v-1h4v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
