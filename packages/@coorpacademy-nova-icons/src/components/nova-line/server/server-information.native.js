import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <Path fill="currentColor" d="M3 3h5v2H3zM3 9h5v2H3zM3 15h5v2H3z" />
    <Circle cx={13} cy={4} r={1} fill="currentColor" />
    <Circle cx={16} cy={4} r={1} fill="currentColor" />
    <Path
      d="M8 18H2v-4h6v-2H2V8h18V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2h6v-2zM2 2h16l-.001 4H2V2z"
      fill="currentColor"
    />
    <Path
      d="M17 24c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.86-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M16 17h2v4h-2z" />
    <Circle cx={17} cy={15} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
