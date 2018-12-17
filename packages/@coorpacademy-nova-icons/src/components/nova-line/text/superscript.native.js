import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.293 8.293L8 14.586 1.707 8.293.293 9.707 6.586 16 .293 22.293l1.414 1.414L8 17.414l6.293 6.293 1.414-1.414L9.414 16l6.293-6.293zM23 5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5v2h4v1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5V6h-4V5h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
