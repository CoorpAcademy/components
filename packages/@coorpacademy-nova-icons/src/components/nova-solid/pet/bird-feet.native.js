import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.375 12.219L8 14.92V10H6v4.92l-3.375-2.701-1.25 1.562L6 17.48V21h2v-3.52l4.625-3.699zM22.625 6.781l-1.25-1.562L18 7.92V3h-2v4.92l-3.375-2.701-1.25 1.562 4.625 3.7V14h2v-3.519z" />
    </G>
  </Svg>
);

export default SvgComponent;
