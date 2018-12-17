import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8L1 22h10L23 8zM5.293 9.293l1.414 1.414L11.414 6 6.707 1.293 5.293 2.707 7.586 5H2v2h5.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
