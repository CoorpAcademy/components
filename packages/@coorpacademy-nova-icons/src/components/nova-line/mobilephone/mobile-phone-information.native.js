import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <Path
      d="M8 17.999H2v-2h6v-2H2v-8h8v2h2v-6c0-1.104-.897-2-2-2H2c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h6v-2zm-6-16h8v2H2v-2zM17 23.999c-3.86 0-7-3.141-7-7s3.14-7 7-7 7 3.141 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M16 16.999h2v4h-2z" />
    <Circle cx={17} cy={14.999} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
