import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 4h9v2h2V4c0-1.102-.897-2-2-2H4c-1.103 0-2 .898-2 2v9c0 1.102.897 2 2 2h2v-2H4V4zM20 9h-2v2h2v9h-9v-2H9v2c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2v-9c0-1.102-.897-2-2-2z" />
      <Path d="M16 8H8v8h8V8zm-2 6h-4v-4h4v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
