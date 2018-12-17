import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 3.003h18v2H4zM8 7.003h14v2H8zM2 11.003h20v2H2zM8 15.003h14v2H8zM4 19.003h18v2H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
