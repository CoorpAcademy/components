import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 3.003h20v2H2zM2 7.003h20v2H2zM2 11.003h20v2H2zM2 15.003h20v2H2zM2 19.003h14v2H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
