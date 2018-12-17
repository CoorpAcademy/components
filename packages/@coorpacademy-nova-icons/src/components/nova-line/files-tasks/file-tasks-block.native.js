import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 10c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3 .462 0 .895.114 1.285.3l-3.984 3.985A2.948 2.948 0 0 1 9 15zm3 3a2.96 2.96 0 0 1-1.285-.3l3.984-3.985c.188.391.301.824.301 1.285 0 1.654-1.346 3-3 3z" />
      <Path d="M19 5h-2V3h-1.142c-.447-1.719-2-3-3.858-3S8.589 1.281 8.142 3H7v2H5c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V7c0-1.102-.897-2-2-2zm-7-3c.739 0 1.385.402 1.731 1h-3.463c.347-.598.993-1 1.732-1zM9 5h6v2H9V5zm10 16H5V7h2v2h10V7h2v14z" />
    </G>
  </Svg>
);

export default SvgComponent;
