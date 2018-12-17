import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a5.98 5.98 0 0 1 2-4.463V2zM8 6H6v2h2v2H6v2H4v-2h2V8H4V6h2V4H4V2h2v2h2v2zM21 19v-3h-2v3h-3v2h3v3h2v-3h3v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
