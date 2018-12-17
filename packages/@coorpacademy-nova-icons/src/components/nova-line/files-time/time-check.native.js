import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 9c0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9 9-4.038 9-9zm-9 7c-3.86 0-7-3.14-7-7s3.14-7 7-7c3.859 0 7 3.14 7 7s-3.141 7-7 7z" />
      <Path d="M10 4H8v5.535l3.445 2.297 1.11-1.664L10 8.465zM22.293 16.293L18 20.586l-2.293-2.293-1.414 1.414L18 23.414l5.707-5.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
