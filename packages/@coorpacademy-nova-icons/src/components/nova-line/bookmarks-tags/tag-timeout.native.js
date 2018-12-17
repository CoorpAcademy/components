import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={15} cy={5} r={2} fill="currentColor" />
    <Path
      d="M8 17.586L2.414 12l10-10H18v5.586l-.207.207 1.414 1.414.5-.5A.996.996 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7A.997.997 0 0 0 8 20v-2.414z"
      fill="currentColor"
    />
    <Path
      d="M17 24c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.86-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M20 18h-4v-5h2v3h2z" />
  </Svg>
);

export default SvgComponent;
