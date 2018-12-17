import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M19.895 8.553l-3-6A1.001 1.001 0 0 0 16 2H8c-.379 0-.725.214-.895.553l-3 6a1.01 1.01 0 0 0-.076.69l3 12c.112.445.512.757.971.757h8c.459 0 .859-.313.971-.757l3-12c.056-.232.03-.476-.076-.69zM15.219 20H8.781L6.061 9.116 8.618 4h6.764l2.558 5.116L15.219 20z" />
      <Path d="M13 6h-2v3H9v2h2v5h2v-5h2V9h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
