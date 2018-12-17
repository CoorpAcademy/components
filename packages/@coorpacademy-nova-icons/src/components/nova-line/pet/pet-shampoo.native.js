import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Circle cx={13} cy={16} r={2} />
      <Path d="M10 14a1 1 0 0 0 1-1v-1a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zM13 13a1 1 0 0 0 1-1v-1a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1zM16 14a1 1 0 0 0 1-1v-1a1 1 0 1 0-2 0v1a1 1 0 0 0 1 1z" />
      <Path d="M18 6h-4V3h4V1H7.586L5.293 3.293l1.414 1.414L8.414 3H12v3H8c-1.103 0-2 .896-2 2v11c0 1.104.897 2 2 2h10c1.103 0 2-.896 2-2V8c0-1.104-.897-2-2-2zm0 13H8V8h10v11z" />
    </G>
  </Svg>
);

export default SvgComponent;
