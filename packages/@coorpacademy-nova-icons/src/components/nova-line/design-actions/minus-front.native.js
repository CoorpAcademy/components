import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 2h2v2H5zM8 2h2v2H8zM11 2h2v2h-2zM2 2h2v2H2zM2 5h2v2H2zM2 8h2v2H2zM2 11h2v2H2zM2 14h2v2H2zM5 14h2v2H5zM8 14h2v2H8zM11 14h2v2h-2zM14 14h2v2h-2zM14 11h2v2h-2zM14 8h2v2h-2zM14 2h2v2h-2zM14 5h2v2h-2z" />
      <Path d="M20 8h-1c-1.103 0-2 .898-2 2v7h-7c-1.103 0-2 .898-2 2v1c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.102-.897-2-2-2zM10 20v-1h9v-9h1l.001 10H10z" />
    </G>
  </Svg>
);

export default SvgComponent;
