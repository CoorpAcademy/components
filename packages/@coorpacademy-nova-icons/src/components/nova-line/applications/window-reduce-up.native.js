import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20v-2h2v-2H3V8h17.999l-.001 8H19v2h1.998v2H3z" />
      <Path d="M16 13l-4-4-4 4h3v5h2v-5zM7 16h2v2H7zM15 16h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
