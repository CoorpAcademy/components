import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 4H4c-1.104 0-2 .898-2 2v12c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2V6c0-1.102-.896-2-2-2zm-.003 14H4V6h16l-.003 12z" />
      <Path d="M7 12h2v4H7zM11 10h2v6h-2zM15 11h2v5h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
