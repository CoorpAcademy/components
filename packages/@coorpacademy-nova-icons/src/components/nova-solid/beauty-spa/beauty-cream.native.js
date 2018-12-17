import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M15 5c0 1-2 4-5 4s-4 3-4 3h12c2 0 1-7-3-7zM2 13v6c0 2.104.895 3 2 3h16c1.104 0 2-.896 2-3v-6H2zm15 6H7v-2h10v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
