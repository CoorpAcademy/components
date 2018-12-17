import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 19a5 5 0 0 1 6-4.899v-9.1c0-1.102-.897-2-2-2h-2v-3h-2v3H6v-3H4v3H2c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h12.101A5.005 5.005 0 0 1 14 19zM2 5.001h16v3H2v-3z" />
      <Path d="M16 18h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
