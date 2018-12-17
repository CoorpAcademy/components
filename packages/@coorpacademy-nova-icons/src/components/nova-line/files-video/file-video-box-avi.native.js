import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <Path d="M8.5 9.002H5a.875.875 0 0 0-.875.875v6.125h1.75v-1.75h1.75v1.75h1.75V9.877a.875.875 0 0 0-.875-.875zm-.875 3.5h-1.75v-1.75h1.75v1.75zM13.7 9.002l-.838 3.414L12 9.002h-1.75l1.718 7h1.8l-.018-.071 1.75-6.929zM16.375 10.752h.875v3.5h-.875v1.75h3.5v-1.75H19v-3.5h.875v-1.75h-3.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
