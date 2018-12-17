import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 4h12v2H10zM10 11h12v2H10zM10 18h12v2H10zM6.293 2.293L5 3.586 3.707 2.293 2.293 3.707 3.586 5 2.293 6.293l1.414 1.414L5 6.414l1.293 1.293 1.414-1.414L6.414 5l1.293-1.293zM6.293 9.293L5 10.586 3.707 9.293l-1.414 1.414L3.586 12l-1.293 1.293 1.414 1.414L5 13.414l1.293 1.293 1.414-1.414L6.414 12l1.293-1.293zM6.293 16.293L5 17.586l-1.293-1.293-1.414 1.413L3.586 19l-1.293 1.293 1.414 1.413L5 20.414l1.293 1.292 1.414-1.413L6.414 19l1.293-1.294z" />
    </G>
  </Svg>
);

export default SvgComponent;
