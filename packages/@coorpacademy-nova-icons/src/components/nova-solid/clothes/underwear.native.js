import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M10.458 8C9.986 8.595 9 10.066 9 12c0 1.363 1.129 5.723 1.758 8h2.484C13.871 17.723 15 13.362 15 12c0-1.952-.981-3.409-1.455-4h-3.087zM8.069 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1c2.629 0 4.299 1.243 5.217 2.236C7.648 16.026 7 13.238 7 12c0-1.644.523-3.012 1.069-4zM21 8h-5.069c.546.988 1.069 2.356 1.069 4 0 1.24-.65 4.035-1.219 6.248C16.7 17.252 18.375 16 21 16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM2 5h20v2H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
