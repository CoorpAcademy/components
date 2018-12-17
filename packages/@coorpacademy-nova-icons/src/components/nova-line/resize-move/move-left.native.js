import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 11H5.414l2.293-2.293-1.414-1.414L1.586 12l4.707 4.707 1.414-1.414L5.414 13H18zM20 4h2v16h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
