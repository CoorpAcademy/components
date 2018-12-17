import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 3h-3.001v2H22l-.002 10h-6.999v2h6.998v1H2v-1h6.999v-2H2V5h2.999V3H2C.897 3 0 3.897 0 5v13c0 1.103.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z" />
      <Path d="M11.999 15s5-2 5-5V4h-10v6c0 3 5 5 5 5zm-3-7h2V6h2v2h2v2h-2v2h-2v-2h-2V8z" />
    </G>
  </Svg>
);

export default SvgComponent;
