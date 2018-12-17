import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <Path d="M9 14v-3a3.001 3.001 0 0 0 0 6 3 3 0 0 0 3-3H9z" />
      <Path d="M10 10v3h3c0-1.656-1.344-3-3-3zM15 10h3v2h-3zM14 13h4v2h-4zM12 16h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
