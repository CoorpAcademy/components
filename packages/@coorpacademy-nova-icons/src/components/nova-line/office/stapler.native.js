import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2.418 12.814l1.163-1.627 7 4.998-1.162 1.628z" />
      <Path d="M20.178 13.653L8.401 4.803a2.001 2.001 0 0 0-2.801.398L3.808 7.589a2.014 2.014 0 0 0-.377 1.497c.08.527.372 1.008.801 1.32l9.824 7.144c.073.524.245 1.011.501 1.45H2v2h16c2.206 0 4-1.794 4-4a3.997 3.997 0 0 0-1.822-3.347zM7.199 6.402l9.219 6.927a4.015 4.015 0 0 0-2.034 1.987L5.408 8.79l1.791-2.388zM18 19c-1.103 0-2-.897-2-2 0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
