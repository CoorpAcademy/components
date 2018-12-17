import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 8h-.63l-6.72-5.759a1 1 0 0 0-1.301 0L4.63 8H4c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V10c0-1.102-.896-2-2-2zm-8-3.682L16.297 8H7.703L12 4.318zM20 20H4V10h16v10z" />
      <Path d="M6 19h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
