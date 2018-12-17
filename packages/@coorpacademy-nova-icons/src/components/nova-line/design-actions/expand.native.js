import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 11V4H4c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-8H12zm-8 8V6h6v7h10l.001 6H4z" />
      <Path d="M21 4h-8v6h8V4zm-2 4h-4V6h4v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
