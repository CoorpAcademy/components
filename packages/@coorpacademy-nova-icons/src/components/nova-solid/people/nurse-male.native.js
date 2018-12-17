import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 20c0-3.533-3.29-6-8-6-4.711 0-8 2.467-8 6v4h16v-4zm-3 0h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2zM12 3C9.238 3 7 5.238 7 8s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm0 8c-1.654 0-3-1.346-3-3h6c0 1.654-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
