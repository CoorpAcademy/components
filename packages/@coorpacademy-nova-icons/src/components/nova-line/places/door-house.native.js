import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18 20.999v-17c0-1.102-.897-2-2-2H8c-1.103 0-2 .898-2 2v17H3v2h18v-2h-3zm-10 0v-17h8l.001 17H8z" />
      <Path d="M13 9.999h2v4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
