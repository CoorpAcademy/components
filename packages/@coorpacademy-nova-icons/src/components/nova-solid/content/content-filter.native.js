import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 2H6c-1.103 0-2 .898-2 2h16c0-1.102-.896-2-2-2zM4 5.001v2c0 .256.098.512.293.707L10 13.415V21a1.002 1.002 0 0 0 1.707.707l2-2A1 1 0 0 0 14 19v-5.586l5.707-5.707A.995.995 0 0 0 20 7.001v-2H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
