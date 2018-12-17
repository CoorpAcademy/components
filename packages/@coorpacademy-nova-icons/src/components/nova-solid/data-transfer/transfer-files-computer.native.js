import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 13.001l4-4h-3v-2h3v-2H9a1 1 0 0 0-1 1v3H5l4 4z" />
      <Path d="M16 13.001v3H2v-6h1v-2H2a2 2 0 0 0-2 2v9c0 1.102.896 2 2 2h6v1H5v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-6h-2z" />
      <Path d="M22.707 3.294l-3-3A.996.996 0 0 0 19 .001h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a.996.996 0 0 0-.293-.707zM19 4.001v-3l3 3h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
