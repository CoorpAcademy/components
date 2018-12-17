import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M4 4h12v2H4zM21 7v2H11V7H9v2H6.5a4.5 4.5 0 0 0-4.478 4.942C2.188 15.695 3.409 17.1 5 17.694V20H4c-.551 0-1-.449-1-1v-1H1v1c0 1.654 1.346 3 3 3h12v-2h-3v-2.555c1.19-.693 2-1.968 2-3.445v-.666l7.165-1.195a1 1 0 0 0 .835-.987V7h-2zM5 13a2 2 0 1 1 4.001.001A2 2 0 0 1 5 13zm6 7H7v-2h4v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
