import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 19a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1v-1h3v-2h-3a1 1 0 0 0-1-1h-5c1.103 0 2-.897 2-2V6h3l-6-4-6 4h3v2c0 1.103.897 2 2 2H6a1 1 0 0 0-1 1H2v2h3v1a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h1v2.5L10 23h4l-1-1.5V19h1zM13 6l.001 2H11V6h2zm-3 7H7v-1h10v1h-3a1 1 0 0 0-1 1v3h-2v-3a1 1 0 0 0-1-1zM2 23h4l-2-3z" />
      <Path d="M6 23h4l-2-3zM16 20l-2 3h4zM20 20l-2 3h4z" />
    </G>
  </Svg>
);

export default SvgComponent;
