import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24.001v24.001H-.002z" />
    <G fill="currentColor">
      <Path d="M18 2.998v2a1.001 1.001 0 0 1-2 0c0-1.654-1.346-3-3-3s-3 1.346-3 3v1h2v-1c0-.551.449-1 1-1s1 .449 1 1c0 1.655 1.346 3 3 3s3-1.345 3-3v-2h-2z" />
      <Path d="M14 8.682V8a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.682A7.006 7.006 0 0 0 4 15c0 3.86 3.141 7 7 7s7-3.14 7-7a7.007 7.007 0 0 0-4-6.318zM11 13c-1.104 0-2 .898-2 2H7c0-2.206 1.795-4 4-4v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
