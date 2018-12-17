import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 10H8c-1.103 0-2 .898-2 2v8c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-8c0-1.102-.897-2-2-2zM8 20v-8h8l.001 8H8zM16 9V7h-2.279L12 1.838 10.279 7H8v2z" />
      <Path d="M10 16h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
