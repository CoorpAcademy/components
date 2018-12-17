import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .896-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.104-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <Path d="M16.25 10h-2.167l-.417 1h-1.834l.417-1h-2.167l-.417 1H7v2h1.833L8 15H6v2h1.167l-.417 1h2.167l.417-1h1.834l-.417 1h2.167l.417-1H16v-2h-1.833L15 13h2v-2h-1.167l.417-1zM12 15h-1.833L11 13h1.833L12 15z" />
    </G>
  </Svg>
);

export default SvgComponent;
