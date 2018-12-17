import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 9h-2V7a1 1 0 0 0-1-1h-4v2h3v2a1 1 0 0 0 1 1h2v2h-2a1 1 0 0 0-1 1v2h-3v2h4a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM4 8h3V6H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4v-2H4V8z" />
      <Path d="M15 13v-3h-3V7H9v3H6v3h3v3h3v-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
