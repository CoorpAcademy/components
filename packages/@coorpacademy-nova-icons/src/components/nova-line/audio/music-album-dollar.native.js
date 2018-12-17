import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.018 12.482l-5 1.63a.75.75 0 0 0-.518.713V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.141V17a1.5 1.5 0 1 0 1.5 1.5v-5.306a.747.747 0 0 0-.982-.712z" />
      <Path d="M14 9H2c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V11c0-1.102-.897-2-2-2zM2 22V11h12l.001 11H2zM21 5h-2a1.001 1.001 0 0 1 0-2h4V1h-2V0h-2v1c-1.654 0-3 1.346-3 3s1.346 3 3 3h2a1.001 1.001 0 0 1 0 2h-4v2h2v1h2v-1c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
