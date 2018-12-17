import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M14.998 16v2H7.665l-2.667 2v-2h-3V9h6V7h-6c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-2h-2z"
      fill="currentColor"
    />
    <Path
      d="M16.998 14c-3.86 0-7-3.14-7-7 0-3.859 3.14-7 7-7s7 3.141 7 7c0 3.86-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M15.998 7h2v4h-2z" />
    <Circle cx={16.998} cy={5} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
