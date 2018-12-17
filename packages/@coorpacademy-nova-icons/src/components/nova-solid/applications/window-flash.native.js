import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM20 9V5.002H0V16c0 1.103.896 2 2 2h10v-7c0-1.1.9-2 2-2h6z" />
      <Path d="M24 15h-3l2-4h-6l-3 6h3l-2 7z" />
    </G>
  </Svg>
);

export default SvgComponent;
