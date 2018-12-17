import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M3 13h12v1.998H3zM3 5.998h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v.998a1 1 0 0 0 1 1zM3 10h12v1.998H3zM3 7h12v1.998H3z" />
      <Path d="M19 9.998h3V8h-3a3 3 0 0 0-3 2.998c0 1.655 1.346 3 3 3A1.002 1.002 0 0 1 19 16H3v1.998h16c1.654 0 3-1.345 3-3 0-1.654-1.346-3-3-3a1.001 1.001 0 0 1 0-2zM15 19H3a.996.996 0 0 0-1 .998V21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1.002c0-.553-.447-1-1-.998z" />
    </G>
  </Svg>
);

export default SvgComponent;
