import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 8h6v12H3V8zm8 12V8h9.999l-.002 12H11z" />
      <Path d="M4 9h2v2H4zM5 12h3v2H5zM5 15h3v2H5zM12 9h8v4h-8zM12 14h8v4h-8z" />
    </G>
  </Svg>
);

export default SvgComponent;
