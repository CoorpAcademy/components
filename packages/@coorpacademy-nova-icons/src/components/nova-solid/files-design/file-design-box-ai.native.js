import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.5 10.75h1.75v1.75H8.5z" />
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM12 16h-1.75v-1.75H8.5V16H6.75V9.875c0-.481.392-.875.875-.875h3.5c.483 0 .875.394.875.875V16zm5.25-5.25h-.875v3.5h.875V16h-3.5v-1.75h.875v-3.5h-.875V9h3.5v1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
