import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.501 2v3h3.379L2.44 19.44l2.122 2.12L19.001 7.121V10.5h3V2z" />
      <Path d="M3.562 10.561l1.939-1.94 1.939 1.94 2.121-2.122L7.622 6.5l1.939-1.939L7.44 2.44 5.501 4.379 3.562 2.44 1.44 4.561 3.38 6.5 1.44 8.439zM17.001 13c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 7c-1.103 0-2-.897-2-2 0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
