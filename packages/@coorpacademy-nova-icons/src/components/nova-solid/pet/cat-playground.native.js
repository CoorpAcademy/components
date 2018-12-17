import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M9 2v2h1.25v2.148a2 2 0 1 0 1.5 0V4H24V2H9zM7 15v7h3v-2a2 2 0 0 1 4 0v2h3v-7H7zM2 15h4v7H2z" />
      <Path d="M18 5v7H0v2h18v8h4V5z" />
    </G>
  </Svg>
);

export default SvgComponent;
