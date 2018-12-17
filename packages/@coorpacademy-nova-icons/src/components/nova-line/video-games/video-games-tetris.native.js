import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M17.998 12.998h-4v-7h-7v-3h-6v20h21v-6h-4v-4zm-15-8h2v3h7v2h-9v-5zm0 7h9v5h-2v-3h-7v-2zm5 9h-5v-5h5v5zm12-2v2h-10v-2h4v-4h2v4h4z" />
      <Path d="M15.998.998v11h6v-11h-6zm4 9h-2v-7h2v7z" />
    </G>
  </Svg>
);

export default SvgComponent;
