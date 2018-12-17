import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 3.003h10v4h4v1h2V5.59l-4.586-4.586H5c-1.103 0-2 .896-2 2v5h2V3.003zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM15 18.003v-7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v7h2v-2h2v2h2zm-4-4v-2h2v2h-2zM8 14.003c0-2.205-1.794-4-4-4H2v8h2c2.206 0 4-1.793 4-4zm-4-2c1.103 0 2 .896 2 2 0 1.103-.897 2-2 2v-4zM16 10.003v2h2v6h2v-6h2v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
