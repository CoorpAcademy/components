import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 5.005h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1zM21.411 19.223L16 12.646V6.005h-2v1h-2v2h2v1h-3v2h3v1c0 .231.081.456.228.636l2.771 3.364H7.003l2.769-3.364c.147-.18.228-.405.228-.636v-7H8v6.642l-5.458 6.639a2.99 2.99 0 0 0-.203 3.105A2.989 2.989 0 0 0 5 24.005h14a2.989 2.989 0 0 0 2.661-1.614c.518-.996.441-2.185-.25-3.168z" />
    </G>
  </Svg>
);

export default SvgComponent;
