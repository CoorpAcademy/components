import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .006h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 9.001h2v-7H9v2h3.586l-8.293 8.293 1.414 1.414L14 5.415zM19.707 11.708l-1.414-1.414L10 18.587v-4.586H8v8h8v-2h-4.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
