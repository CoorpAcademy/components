import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 9c0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9 9-4.038 9-9zm-6.555 2.832L8 9.535V4h2v4.465l2.555 1.703-1.11 1.664zM22.294 16.293L18 20.586l-2.292-2.293-1.415 1.413L18 23.414l5.708-5.708z" />
    </G>
  </Svg>
);

export default SvgComponent;
