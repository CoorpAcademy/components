import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      d="M18 2H6c-1.104 0-2 .898-2 2v4c0 .256.098.512.293.707L9 13.415V21a1.002 1.002 0 0 0 1.707.707l4-4A.996.996 0 0 0 15 17v-3.586l4.707-4.707A.996.996 0 0 0 20 8V4c0-1.102-.896-2-2-2zm-4.707 10.293A1 1 0 0 0 13 13v3.586l-2 2V13a.997.997 0 0 0-.293-.707L6 7.586V4h12v3.586l-4.707 4.707z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
