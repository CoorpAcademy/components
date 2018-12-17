import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M10 9.388l2.632.877L13 9.162v-.883L8 6.612v5.391h2zM5 14.5a2.5 2.5 0 0 0 3 2.45v-4.9a2.5 2.5 0 0 0-3 2.45z"
    />
    <Path
      d="M2 2h10v4h4v2.005h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h6v-2H2V2z"
      fill="currentColor"
    />
    <Path
      d="M17 10c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M16 17h2v4h-2z" />
    <Circle cx={17} cy={15} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
