import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <G fill="currentColor">
      <Path d="M12 4c2.527 0 5 4.009 5 7h2c0-3.624-2.94-9-7-9s-7 5.376-7 9h2c0-2.991 2.473-7 5-7zM20 13a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1 8.002 8.002 0 0 0 4.136 7H6v2h12v-2h-2.136A8.002 8.002 0 0 0 20 13z" />
      <Path d="M11 10c0-2 .531-2 1-2V6c-1.99 0-3 1.346-3 4h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
