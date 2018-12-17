import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M19.895 8.553l-3-6A1.001 1.001 0 0 0 16 2H8a.998.998 0 0 0-.894.553l-3 6a1.01 1.01 0 0 0-.077.69l3 12c.112.445.512.757.971.757h8c.459 0 .859-.312.971-.757l3-12c.056-.232.03-.476-.076-.69zM16 11h-3v6h-2v-6H8V9h3V6h2v3h3v2z"
    />
  </Svg>
);

export default SvgComponent;
