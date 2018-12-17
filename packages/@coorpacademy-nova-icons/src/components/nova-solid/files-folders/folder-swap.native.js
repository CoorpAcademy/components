import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2v2.586l-3.293-3.293-1.414 1.414L18.586 6H16v2h6V2zM8 18v-2H2v6h2v-2.586l3.293 3.292 1.414-1.413L5.414 18zM8 9h6V5H8L7 3H2v11h6z" />
      <Path d="M15 11h-5v11h12v-9h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
