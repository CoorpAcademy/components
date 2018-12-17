import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.001h10v4h4v1h2V5.587l-4.586-4.586H5c-1.103 0-2 .897-2 2v5h2v-5zM19 21.001H5v-1H3v1c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2v-1h-2v1zM8 15.001v-5H6v5a1 1 0 0 1-2 0H2c0 1.654 1.346 3 3 3s3-1.346 3-3zM9 10.001v8h2v-2h1c1.654 0 3-1.346 3-3s-1.346-3-3-3H9zm4 3a1 1 0 0 1-1 1h-1v-2h1a1 1 0 0 1 1 1zM22 12.001v-2h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2c1.104 0 2-.897 2-2v-3h-3v2h1v1h-2v-4h4z" />
    </G>
  </Svg>
);

export default SvgComponent;
