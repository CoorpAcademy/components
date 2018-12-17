import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 16H2V4h8v5h2V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h8v-4zM12 11v7c0 .477.06.921.167 1.335.754 2.897 3.88 4.294 5.637 4.646l.196.039.196-.039c1.756-.352 4.883-1.748 5.637-4.646A5.31 5.31 0 0 0 24 18v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
