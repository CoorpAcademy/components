import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.293 8.707L18.586 11H6v2h12.586l-2.293 2.293 1.414 1.414L22.414 12l-4.707-4.707zM2 4h2v16H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
