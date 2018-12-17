import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.92 12H16c2.206 0 4-1.794 4-4s-1.794-4-4-4h-1V3a1 1 0 0 0-1-1H8v3h1v5H5V5h1V2H2a1 1 0 0 0-1 1v8c0 1.958.81 3.729 2.11 5H0v2h14v-2h-1.121a6.985 6.985 0 0 0 2.041-4zM15 6h1c1.103 0 2 .897 2 2 0 1.102-.897 2-2 2h-1V6z" />
      <Path d="M24 13.414L22.586 12 21 13.586V12h-2v3.586l-1 1V15h-2v3.586l-1.707 1.707 1.414 1.413L17.414 20H21v-2h-1.586l1-1H24v-2h-1.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
