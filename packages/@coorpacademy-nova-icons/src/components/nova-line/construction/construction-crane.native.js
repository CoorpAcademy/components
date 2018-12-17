import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M0 21h14v-6H0v6zm2-4h10v2H2v-2z" />
      <Path d="M24 3h-2.051c-.245-1.691-1.69-3-3.449-3s-3.204 1.309-3.449 3H2v2h3v3.172A3.004 3.004 0 0 0 3 11c0 1.654 1.346 3 3 3s3-1.346 3-3H7c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1h1V5h8v19h7V7h2V3zm-4 19h-3V3.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V22z" />
    </G>
  </Svg>
);

export default SvgComponent;
