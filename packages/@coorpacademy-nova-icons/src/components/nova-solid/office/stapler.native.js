import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 11.124l1.217-1.588 6.367 4.877L9.368 16z" />
      <Path d="M20 14L8.54 5.21a2 2 0 0 0-2.8.36L3.9 7.96l10.61 8.09.01.011A3.972 3.972 0 0 0 14 18H2v3h18.64A3.972 3.972 0 0 0 22 18c0-1.372-.681-2.977-2-4zm-2 5.5a1.5 1.5 0 1 1-.001-2.999A1.5 1.5 0 0 1 18 19.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
