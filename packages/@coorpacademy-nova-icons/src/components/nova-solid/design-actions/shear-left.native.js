import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 8H1l12 14h10zM18.707 9.293L16.414 7H22V5h-5.586l2.293-2.293-1.414-1.414L12.586 6l4.707 4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
