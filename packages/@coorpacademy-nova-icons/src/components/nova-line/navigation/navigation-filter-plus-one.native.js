import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 6H2v15a1 1 0 0 0 1 1h15v-2H4V6z" />
      <Path d="M21 2H7a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 14H8V4h12v12z" />
      <Path d="M11 14h2v-2h2v-2h-2V8h-2v2H9v2h2zM17 14h2V7a1 1 0 0 0-1-1h-3v2h2v6z" />
    </G>
  </Svg>
);

export default SvgComponent;
