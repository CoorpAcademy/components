import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.486 7H0l12.514 16h10.543L10.486 7zM4.058 9h5.457l9.428 12h-5.457L4.058 9zM18.707 9.294L16.414 7H22V5h-5.586l2.293-2.294-1.414-1.412L12.586 6l4.707 4.706z" />
    </G>
  </Svg>
);

export default SvgComponent;
