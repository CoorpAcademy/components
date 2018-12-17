import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <Path d="M4.125 10.752v5.25h1.75v-2.625H8.5v-1.75H5.875v-.875h3.5v-1.75h-3.5c-.965 0-1.75.785-1.75 1.75zM18.075 9.002l-.838 3.414-.862-3.414h-1.75l1.718 7h1.8l-.018-.071 1.75-6.929zM12 9.002h-1.75v7h4.375v-1.75H12z" />
    </G>
  </Svg>
);

export default SvgComponent;
