import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M13 16.898a5.008 5.008 0 0 0 4-4.899c0-.086-.996-9.024-1.006-9.11A1 1 0 0 0 15 2H9a1 1 0 0 0-.994.89C7.996 2.976 7 11.913 7 12a5.008 5.008 0 0 0 4 4.899V20H8v2h8v-2h-3v-3.102zM9.894 4h4.211l.333 3H9.561l.333-3zM11 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3a1.001 1.001 0 1 1 2.002.002A1.001 1.001 0 0 1 12 10z"
    />
  </Svg>
);

export default SvgComponent;
