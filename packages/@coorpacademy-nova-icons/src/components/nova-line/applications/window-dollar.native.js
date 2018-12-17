import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 6.006h17.999V10H22V2.006c0-1.104-.897-2-2-2H2c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h12v-2H2v-12zm10-4h8v2h-8v-2zm-2 2H7v-2h3v2zm-8-2h3v2H2v-2z" />
      <Path d="M21 17h-2c-.551 0-1-.449-1-1s.449-1 1-1h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2c.551 0 1 .449 1 1s-.449 1-1 1h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
