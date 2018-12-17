import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 11H10.414l2.293-2.293-1.414-1.414L6.586 12l4.707 4.707 1.414-1.414L10.414 13H22zM2 7h2v10H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
