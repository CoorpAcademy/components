import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20v-8h2v-2H3V8h17.999v2H19v2h1.999l-.001 8H3z" />
      <Path d="M13 10h-2v5H8l4 4 4-4h-3zM7 10h2v2H7zM15 10h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
