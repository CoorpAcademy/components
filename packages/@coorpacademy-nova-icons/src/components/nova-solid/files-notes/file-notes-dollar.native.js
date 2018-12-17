import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-3 10h-3.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.122 2.5 2.5 0 1.206-.86 2.217-2 2.449V19h-2v-1H9v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 9 12.5c0-1.207.86-2.217 2-2.449V9h2v1h2v2z"
    />
  </Svg>
);

export default SvgComponent;
