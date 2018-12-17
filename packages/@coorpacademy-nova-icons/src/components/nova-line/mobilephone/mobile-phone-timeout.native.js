import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <Path
      d="M8 18H2v-2h6v-2H2V6h8v2h2V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h6v-2zM2 2h8v2H2V2zM17 24c-3.86 0-7-3.141-7-7s3.14-7 7-7 7 3.141 7 7-3.14 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M20 18h-4v-5h2v3h2z" />
  </Svg>
);

export default SvgComponent;
