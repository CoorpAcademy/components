import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.003h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .896-2 2v5h2V3.003zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM12.8 10.003l-1.234 2.056-1.233-2.056H8l2.4 4-2.4 4h2.333l1.233-2.055 1.234 2.055h2.333l-2.401-4 2.401-4zM7 16.003H3v-1h3v-2H3v-1h4v-2H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5v-2zM22 12.003v-2h-5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h5v-2h-4v-1h3v-2h-3v-1h4z" />
    </G>
  </Svg>
);

export default SvgComponent;
