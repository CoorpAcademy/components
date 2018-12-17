import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 11.003h-4.586l1.293-1.293-1.414-1.414-3.707 3.707 3.707 3.707 1.414-1.414-1.293-1.293H22zM11 2.003h2v20h-2zM2 3.003h8v2H2zM4 7.003h6v2H4zM2 11.003h8v2H2zM4 15.003h6v2H4zM2 19.003h8v2H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
