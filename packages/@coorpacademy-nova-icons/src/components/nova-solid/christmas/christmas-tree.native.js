import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24H0z" />
    <G fill="currentColor">
      <Path d="M19.707 16.293L16.414 13H18a1 1 0 0 0 .707-1.707L15.414 8H16a1 1 0 0 0 .707-1.707l-4-4a.999.999 0 0 0-1.414 0l-4 4A1.002 1.002 0 0 0 8 8h.586l-3.293 3.293A1.002 1.002 0 0 0 6 13h1.586l-3.293 3.293A1.002 1.002 0 0 0 5 18h14a1 1 0 0 0 .707-1.707zM11 19h2v3h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
