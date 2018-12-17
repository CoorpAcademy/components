import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M20 8H10a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z" />
      <Path d="M4 4h10v3h2V4c0-1.102-.897-2-2-2H4c-1.103 0-2 .898-2 2v10c0 1.102.897 2 2 2h3v-2H4V4z" />
    </G>
  </Svg>
);

export default SvgComponent;
