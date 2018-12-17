import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 3H4a1 1 0 0 0-1 1v1h19v10h-8v2h8v1h-8a1 1 0 0 0-1 1v3h-3v2h8v-2h-3v-2h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
      <Path d="M9 18v2h1c1.103 0 2-.896 2-2V8c0-1.102-.897-2-2-2H3c-1.103 0-2 .898-2 2v3.001L10 11v4H9v2h1v1H9zM3 9V8h7v1H3z" />
      <Path d="M6 12H2c-1.103 0-2 .898-2 2v8c0 1.104.897 2 2 2h4c1.103 0 2-.896 2-2v-8c0-1.102-.897-2-2-2zm0 2l.001 5H2v-5h4zm-4 8v-1h4.001v1H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
