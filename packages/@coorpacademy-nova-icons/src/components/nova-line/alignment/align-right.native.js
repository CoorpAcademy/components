import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 3h18v2H4zM8 7h14v2H8zM2 11h20v2H2zM8 15h14v2H8zM4 19h18v2H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
