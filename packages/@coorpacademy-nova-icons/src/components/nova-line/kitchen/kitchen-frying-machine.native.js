import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M6 5v4c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3V5a1 1 0 0 0-1-1H8V1a1 1 0 0 0-1-1H3v2h3v3zm6 5V6h2v4h-2zm5 0h-1V6h2v3c0 .551-.449 1-1 1zm-7-4v4H9c-.551 0-1-.449-1-1V6h2zM20 13H6a1 1 0 0 0-1 1v7c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-7a1 1 0 0 0-1-1zm-2 9H8c-.551 0-1-.449-1-1v-6h12v6c0 .551-.449 1-1 1z" />
      <Path d="M11 16h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
