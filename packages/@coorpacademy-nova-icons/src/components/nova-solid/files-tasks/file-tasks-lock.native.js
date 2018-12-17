import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4zM12 12c-.551 0-1 .449-1 1v2h2v-2c0-.551-.449-1-1-1z" />
      <Path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-3 15H8v-5h1v-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h1v5z" />
    </G>
  </Svg>
);

export default SvgComponent;
