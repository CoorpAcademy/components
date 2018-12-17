import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.007 3.001a7.992 7.992 0 0 1 6.112 2.838l1.527-1.291a9.99 9.99 0 0 0-7.64-3.547 9.993 9.993 0 0 0-7.654 3.563l1.529 1.289a7.998 7.998 0 0 1 6.126-2.852z" />
      <Path d="M7.207 7.401l1.6 1.199c.763-1.017 1.929-1.6 3.2-1.6s2.438.584 3.202 1.602l1.6-1.199a5.95 5.95 0 0 0-4.802-2.402 6.024 6.024 0 0 0-4.8 2.4zM9 13.003c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zM15 13.003c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1z" />
      <Path d="M19 10.003h-6v-2h-2v2H5c-1.103 0-2 .896-2 2v8c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2v-8c0-1.104-.897-2-2-2zm-14 10v-8h14l.001 8H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
