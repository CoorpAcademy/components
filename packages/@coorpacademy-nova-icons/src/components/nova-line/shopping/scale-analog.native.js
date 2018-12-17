import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 9.95V7h2c.266 0 .52-.105.707-.293l2-2-1.414-1.414L17.586 5H6.414L4.707 3.293 3.293 4.707l2 2A.996.996 0 0 0 6 7h2v2.95C5.041 11.426 3 14.475 3 18v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2c0-3.525-2.041-6.574-5-8.05zM10 7h4v2.232C13.355 9.085 12.688 9 12 9s-1.355.085-2 .232V7zm9 12H5v-1c0-3.86 3.141-7 7-7s7 3.14 7 7v1z" />
      <Path d="M11 13h2v4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
