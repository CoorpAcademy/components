import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3h10v4h4v1h2V5.586L16.414 1H5c-1.103 0-2 .898-2 2v5h2V3zM19 21H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM19 12h3v-2h-3c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h3v-2h-3c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1zM8 14c0-2.206-1.794-4-4-4H2v8h2c2.206 0 4-1.794 4-4zm-4-2c1.103 0 2 .898 2 2 0 1.103-.897 2-2 2v-4zM9 13v2c0 1.654 1.346 3 3 3s3-1.346 3-3v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3zm4 0v2a1.001 1.001 0 0 1-2 0v-2a1.001 1.001 0 0 1 2 0z" />
    </G>
  </Svg>
);

export default SvgComponent;
