import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 11h-4.586l1.293-1.292-1.414-1.414L13.586 12l3.707 3.708 1.414-1.414L17.414 13H22zM11 2h2v20h-2zM2 3h8v2H2zM4 7h6v2H4zM2 11h8v2H2zM4 15h6v2H4zM2 19h8v2H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
