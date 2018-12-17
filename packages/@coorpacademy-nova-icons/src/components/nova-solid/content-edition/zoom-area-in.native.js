import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 14a9 9 0 0 1 14-7.482V2c0-1.102-.897-2-2-2H2C.897 0 0 .898 0 2v15c0 1.103.897 2 2 2h4.518A8.952 8.952 0 0 1 5 14z" />
      <Path d="M15 11h-2v2h-2v2h2v2h2v-2h2v-2h-2z" />
      <Path d="M24.036 21.95l-4.159-4.159A6.962 6.962 0 0 0 21 14c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7a6.948 6.948 0 0 0 3.746-1.097l4.168 4.168 2.122-2.121zM9 14c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
