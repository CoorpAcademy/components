import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 5.002a3 3 0 1 0-6 0v9.168a4.469 4.469 0 0 0-1.5 3.332 4.5 4.5 0 0 0 9 0A4.469 4.469 0 0 0 9 14.17V5.002zm-3 15a2.5 2.5 0 0 1-1-4.789V9.002h2v6.211a2.5 2.5 0 0 1-1 4.789zM23.53 8.532l-1.06-1.06-2.53 2.53H18v-1.94l2.53-2.53-1.06-1.06L17 6.942l-2.47-2.47-1.06 1.06L16 8.062v1.94h-1.939l-2.531-2.53-1.06 1.06 2.469 2.47-2.469 2.47 1.06 1.06 2.531-2.53H16v1.94l-2.53 2.53 1.06 1.06 2.47-2.47 2.47 2.47 1.06-1.06-2.53-2.53v-1.94h1.94l2.53 2.53 1.06-1.06-2.47-2.47z" />
    </G>
  </Svg>
);

export default SvgComponent;
