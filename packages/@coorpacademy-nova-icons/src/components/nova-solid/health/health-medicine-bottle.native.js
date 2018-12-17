import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M5 8v12c0 1.103.897 2 2 2h10c1.104 0 2-.897 2-2V8H5zm11 8h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zM18 2H6c-1.103 0-2 .898-2 2v3h16V4c0-1.102-.896-2-2-2zM8 6H6V3h2v3zm5 0h-2V3h2v3zm5 0h-2V3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
