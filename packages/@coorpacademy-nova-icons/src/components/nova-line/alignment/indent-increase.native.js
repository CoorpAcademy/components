import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 3h18v2H2zM2 7h12v2H2zM2 11h12v2H2zM2 15h12v2H2zM2 19h18v2H2zM16 18l6-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
