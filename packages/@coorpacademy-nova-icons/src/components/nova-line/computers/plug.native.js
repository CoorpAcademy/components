import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 13h6l-3-3z" />
      <Path d="M16 6V4c0-1.104-.897-2-2-2h-4c-1.103 0-2 .896-2 2v2H5v9c0 1.103.897 2 2 2h2v3h2v2h2v-2h2v-3h2c1.103 0 2-.897 2-2V6h-3zm-6-2h4v2h-4V4zm7 11h-4v3h-2v-3H7V8h10v7z" />
    </G>
  </Svg>
);

export default SvgComponent;
