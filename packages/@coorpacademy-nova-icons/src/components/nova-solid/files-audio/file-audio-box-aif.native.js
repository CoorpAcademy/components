import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.876 10.756h1.75v1.75h-1.75z" />
      <Path d="M22 6.006H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zM9.376 16.004h-1.75v-1.75h-1.75v1.75H4.127V9.881c0-.483.392-.875.875-.875h3.499c.483 0 .875.392.875.875v6.123zm4.374-5.246h-.875v3.499h.875v1.75h-3.5v-1.75h.875v-3.499h-.875v-1.75h3.5v1.75zm6.123 0h-3.499v.875h2.624v1.749h-2.624v2.625h-1.75v-5.248c0-.965.785-1.75 1.75-1.75h3.499v1.749z" />
    </G>
  </Svg>
);

export default SvgComponent;
