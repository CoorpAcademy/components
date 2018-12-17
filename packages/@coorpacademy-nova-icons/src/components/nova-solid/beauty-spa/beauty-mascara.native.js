import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.001h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M8 6h2V4H8V2H6v2H4v2h2v1H3v2h3v1H4v2h2v2H4v5a3 3 0 1 0 6 0v-5H8v-2h2v-2H8V9h3V7H8V6zM14 12h6v2h-6zM18 2h-2a2 2 0 0 0-2 2v7h6V4a2 2 0 0 0-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
