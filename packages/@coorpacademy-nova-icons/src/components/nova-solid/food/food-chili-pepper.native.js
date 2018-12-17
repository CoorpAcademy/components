import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <G fill="currentColor">
      <Path d="M20.8 3.6l-1.6-1.2-2.499 3.332-1.254-.626-.894 1.788 4 2 .894-1.788-.927-.464zM12 10c-.809 1.616-1.246 3.5-2.216 5H13v1H9.148l1.807 1.159-.541.841-2.19-1.405C5.939 17.997 2 18 2 18s2 3 7 3c7 0 10-10 8-12s-4.367-.266-5 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
