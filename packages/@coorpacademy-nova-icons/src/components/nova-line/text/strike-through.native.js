import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 4h5v5h2V4h5v2h2V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v3h2V4zM21 13v-2H3v2h8v7H8v2h8v-2h-3v-7z" />
    </G>
  </Svg>
);

export default SvgComponent;
