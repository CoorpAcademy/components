import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M13 12h2v2h-2zM11 14h2v2h-2zM15 14h2v2h-2zM21 2H3c-1.103 0-2 .898-2 2v2h22V4c0-1.102-.897-2-2-2zM9 12h2v2H9zM7 14h2v2H7z" />
      <Path d="M1 20c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V7H1v13zm4-6h2v-2H5v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h-2v2h2v2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
