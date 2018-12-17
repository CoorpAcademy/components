import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 6h3V4H4c-1.103 0-2 .897-2 2v3h2V6zM20 4h-3v2h3v3h2V6c0-1.103-.896-2-2-2zM4 15H2v3c0 1.104.897 2 2 2h3v-2H4v-3zM20 18h-3v2h3a2 2 0 0 0 2-2v-3h-2v3zM7 9h10v6H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
