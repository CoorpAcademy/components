import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M21 7h-4V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-5 8a1 1 0 0 0-1 1v4h-2v-2h-2v2H9v-4a1 1 0 0 0-1-1H4v-2h2v-2H4V9h4a1 1 0 0 0 1-1V4h2v2h2V4h2v4a1 1 0 0 0 1 1h4v2h-2v2h2v2h-4z" />
      <Path d="M11 15h2v2h-2zM15 11h2v2h-2zM11 7h2v2h-2zM7 11h2v2H7z" />
    </G>
  </Svg>
);

export default SvgComponent;
