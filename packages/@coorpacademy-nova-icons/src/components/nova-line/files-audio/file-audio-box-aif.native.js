import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <Path d="M8.5 9.002H5a.875.875 0 0 0-.875.875v6.125h1.75v-1.75h1.75v1.75h1.75V9.877a.875.875 0 0 0-.875-.875zm-.875 3.5h-1.75v-1.75h1.75v1.75zM14.625 10.752v5.25h1.75v-2.625H19v-1.75h-2.625v-.875h3.5v-1.75h-3.5c-.965 0-1.75.785-1.75 1.75zM10.25 10.752h.875v3.5h-.875v1.75h3.5v-1.75h-.875v-3.5h.875v-1.75h-3.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
