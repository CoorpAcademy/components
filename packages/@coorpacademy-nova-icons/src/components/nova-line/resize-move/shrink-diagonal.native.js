import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 15v-2h-6v6h2v-2.586l5.293 5.293 1.414-1.414L16.414 15zM9 7.586L3.707 2.293 2.293 3.707 7.586 9H5v2h6V5H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
