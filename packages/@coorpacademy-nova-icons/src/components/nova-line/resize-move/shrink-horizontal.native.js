import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .006h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.293 5.292l-6.707 6.707 6.707 6.707 1.414-1.414-5.293-5.293 5.293-5.293zM2.293 6.706l5.293 5.293-5.293 5.293 1.414 1.414 6.707-6.707-6.707-6.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
