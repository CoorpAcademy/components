import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.003h10v4h4v1h2V5.589l-4.586-4.586H5c-1.103 0-2 .897-2 2v5h2v-5zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM19 12.003h3v-2h-3c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h3v-2h-3c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1zM15 18.003v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7h2v-2h2v2h2zm-4-4v-2h2v2h-2zM4 16.003h2v2h2v-7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7h2v-2zm0-4h2v2H4v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
