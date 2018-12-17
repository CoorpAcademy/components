import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2H4c-1.103 0-2 .898-2 2v19h2v-2h16v2h2V4c0-1.102-.897-2-2-2zm0 2v7h-8V6H9v5H8V6H5v5H4V4h16zm-5 10v5h-1v-5h-3v5h-1v-5H7v5H4v-6h16v6h-2v-5h-3z" />
      <Path d="M15.799 5l1.799 4.665-2.8 1.08L13 6.08z" />
    </G>
  </Svg>
);

export default SvgComponent;
