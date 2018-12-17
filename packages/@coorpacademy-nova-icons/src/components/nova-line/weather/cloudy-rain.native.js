import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 3a6.961 6.961 0 0 0-6.437 4.254A4.959 4.959 0 0 0 7 7c-2.757 0-5 2.243-5 5 0 1.785.962 3.446 2.511 4.337l.997-1.734A3.012 3.012 0 0 1 4 12c0-1.654 1.346-3 3-3 .569 0 1.129.167 1.619.482a1 1 0 0 0 1.516-.614A4.975 4.975 0 0 1 15 5c2.757 0 5 2.243 5 5a5.02 5.02 0 0 1-2.505 4.334l1 1.732A7.025 7.025 0 0 0 22 10c0-3.859-3.14-7-7-7z" />
      <Path d="M4.329 20.664l3-6 1.341.671-3 6zM8.329 20.664l3-6 1.341.672-3 6zM13.67 21.335l-1.341-.672 3.002-5.999 1.341.672z" />
    </G>
  </Svg>
);

export default SvgComponent;
