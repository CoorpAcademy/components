import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M17 9V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1z" />
      <Path d="M19 6h-1v2h1v4h-9c-1.103 0-2 .898-2 2v2H7v5a2 2 0 0 0 4 0v-5h-1v-2h9c1.103 0 2-.898 2-2V8c0-1.102-.897-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
