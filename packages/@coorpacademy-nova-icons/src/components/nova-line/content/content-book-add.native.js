import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 18H6V2h10v11h2V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12v-2zm-9 0H2V2h2v16zM23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
