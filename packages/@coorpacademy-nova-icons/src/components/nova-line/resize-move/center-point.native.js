import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 21h2v-6H3v2h2.586L.293 22.293l1.414 1.414L7 18.414zM22.293.293L17 5.586V3h-2v6h6V7h-2.586l5.293-5.293zM21 17v-2h-6v6h2v-2.586l5.293 5.293 1.414-1.414L18.414 17zM3 9h6V3H7v2.586L1.707.293.293 1.707 5.586 7H3z" />
      <Path d="M12 16c2.205 0 4-1.795 4-4s-1.795-4-4-4-4 1.795-4 4 1.795 4 4 4zm0-6a2 2 0 1 1-.001 4.001A2 2 0 0 1 12 10z" />
    </G>
  </Svg>
);

export default SvgComponent;
