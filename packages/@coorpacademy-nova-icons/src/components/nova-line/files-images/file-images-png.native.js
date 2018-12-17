import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.001h10v4h4v1h2V5.587l-4.586-4.586H5c-1.103 0-2 .897-2 2v5h2v-5zM19 21.001H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM10.832 10.446A1.001 1.001 0 0 0 9 11.001v7h2v-3.697l2.168 3.252A1 1 0 0 0 15 17.001v-7h-2v3.698l-2.168-3.253zM4 16.001h1c1.654 0 3-1.346 3-3s-1.346-3-3-3H2v8h2v-2zm0-4h1a1.001 1.001 0 0 1 0 2H4v-2zM22 12.001v-2h-4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-3h-3v2h1v1h-2v-4h4z" />
    </G>
  </Svg>
);

export default SvgComponent;
