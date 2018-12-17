import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 8h7v2H3zM3 11h5v2H3z" />
      <Path d="M2 7h15.999v1H20V2a2 2 0 0 0-2-2H2C.897 0 0 .896 0 2v12c0 1.103.897 2 2 2h6v-2H2V7zm16-5l-.001 3H2V2h16z" />
      <Path d="M17 10c-3.859 0-7 3.14-7 7 0 3.861 3.141 7 7 7 3.86 0 7-3.139 7-7 0-3.86-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <Path d="M18 13h-2v5h4v-2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
