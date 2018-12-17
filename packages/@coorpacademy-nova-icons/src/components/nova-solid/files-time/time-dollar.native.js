import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.94 10c.037-.329.06-.662.06-1 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a8.95 8.95 0 0 0 5.002-1.522V12c0-1.1.9-2 2-2h1.938zm-6.495 1.832L8 9.535V4h2v4.465l2.555 1.703-1.11 1.664zM21.002 17h-2a1 1 0 0 1 0-2h4v-2h-2v-1h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1 1 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.345-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
