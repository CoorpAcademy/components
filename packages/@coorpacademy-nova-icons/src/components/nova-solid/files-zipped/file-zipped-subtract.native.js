import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12c.378 0 .728-.111 1.029-.294A4.952 4.952 0 0 1 16 17.027V2a2 2 0 0 0-2-2zM8 6H6v2h2v2H6v2H4v-2h2V8H4V6h2V4H4V2h2v2h2v2zM17 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
