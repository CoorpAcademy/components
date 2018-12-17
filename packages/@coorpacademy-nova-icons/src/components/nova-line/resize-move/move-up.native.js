import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 22V9.414l2.293 2.293 1.414-1.414L12 5.586l-4.707 4.707 1.414 1.414L11 9.414V22zM4 2h16v2H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
