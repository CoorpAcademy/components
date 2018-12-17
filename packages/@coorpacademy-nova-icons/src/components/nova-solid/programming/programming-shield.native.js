import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 12h2v-2h2V8h-2V6h-2v2H9v2h2zM.001 18c0 1.103.897 2 2 2h9v2h-4v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2v-1h-24v1z" />
      <Path d="M22 3H2C.897 3 0 3.898 0 5v11h24V5c0-1.102-.896-2-2-2zm-5 7c0 3-5 5-5 5s-5-2-5-5V5h10v5z" />
    </G>
  </Svg>
);

export default SvgComponent;
