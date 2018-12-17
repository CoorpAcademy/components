import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M19.986 22.467A45.509 45.509 0 0 1 17.523 18H20v-2H4v2h2.477a45.718 45.718 0 0 1-2.463 4.467A1 1 0 0 0 4.858 24H8c0-2.209.791-4 3-4h2c2.209 0 3 1.791 3 4h3.142a.998.998 0 0 0 .844-1.533zM13 5V3l-1-2-1 2v2a78.55 78.55 0 0 1-1.083 4h4.165A79.554 79.554 0 0 1 13 5zM10.25 15l.75-3h2l.75 3h2.43a58.793 58.793 0 0 1-1.128-3H16v-2H8v2h.948a58.766 58.766 0 0 1-1.127 3h2.429z" />
    </G>
  </Svg>
);

export default SvgComponent;
