import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M17 24h-5C5.384 24 0 18.617 0 12V7c0-1.104.897-2 2-2h4c1.103 0 2 .896 2 2v4a2.003 2.003 0 0 1-1.908 1.998c.437 2.584 2.367 4.52 4.909 4.924A2.004 2.004 0 0 1 13 16h4c1.103 0 2 .896 2 2v4a2 2 0 0 1-2 2zM2 7v5c0 5.514 4.486 10 10 10h5.001L17 18h-4v1a1 1 0 0 1-1 1c-4.488 0-7.928-3.433-8-7.984A1.005 1.005 0 0 1 5 11h1V7H2z"
      fill="currentColor"
    />
    <Path
      d="M17 14c-3.86 0-7-3.14-7-7 0-3.859 3.14-7 7-7s7 3.141 7 7c0 3.86-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M20 8h-4V3h2v3h2z" />
  </Svg>
);

export default SvgComponent;
