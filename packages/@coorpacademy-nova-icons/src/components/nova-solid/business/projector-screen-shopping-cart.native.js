import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zm-5.029 4.243c-.068.269-.976 4.028-1.117 4.267A.973.973 0 0 1 16 16a1 1 0 1 1-2 0h-3a1 1 0 1 1-2 0c0-.184.062-.346.149-.494-.13-.219-1.79-5.264-1.87-5.506H6V8h2a1 1 0 0 1 .949.685L9.387 10H16a1.002 1.002 0 0 1 .971 1.243zM20 6H4V5h16v1z" />
      <Path d="M14.719 12h-4.664l.666 2h3.498z" />
    </G>
  </Svg>
);

export default SvgComponent;
