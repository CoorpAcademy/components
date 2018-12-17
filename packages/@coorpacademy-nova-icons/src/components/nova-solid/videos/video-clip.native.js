import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.748 15.575l5.492-3.139a.499.499 0 0 0 0-.868L9.748 8.431a.502.502 0 0 0-.499 0A.503.503 0 0 0 9 8.865v6.277c0 .178.095.343.249.433a.502.502 0 0 0 .499 0z" />
      <Path d="M19 2.005v1.998H5V2.005H2v20h3v-2.002h14v2.002h3v-20h-3zM5 17.003v-10h14v10H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
