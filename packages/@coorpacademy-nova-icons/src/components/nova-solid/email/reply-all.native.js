import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 12h-8.586l3.293-3.293-1.414-1.414L8.586 13l5.707 5.707 1.414-1.414L12.414 14H21z" />
      <Path d="M10.707 8.707L9.293 7.293 3.586 13l5.707 5.707 1.414-1.414L6.414 13z" />
    </G>
  </Svg>
);

export default SvgComponent;
