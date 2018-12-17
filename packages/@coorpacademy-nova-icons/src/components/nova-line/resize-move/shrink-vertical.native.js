import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24.001" {...props}>
    <Path fill="none" d="M0 .006h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 7.586L6.707 2.293 5.293 3.707 12 10.414l6.707-6.707-1.414-1.414zM5.293 20.293l1.414 1.414L12 16.414l5.293 5.293 1.414-1.414L12 13.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
