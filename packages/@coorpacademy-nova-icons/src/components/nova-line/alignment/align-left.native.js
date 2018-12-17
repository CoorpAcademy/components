import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 3h18v2H2zM2 7h14v2H2zM2 11h20v2H2zM2 15h14v2H2zM2 19h18v2H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
