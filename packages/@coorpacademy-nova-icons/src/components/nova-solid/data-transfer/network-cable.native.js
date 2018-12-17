import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 14.002h2v2H2zM11 5.002h2v2h-2zM20 14.002h2v2h-2zM19 13.002a1 1 0 0 0-1-1h-3v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
