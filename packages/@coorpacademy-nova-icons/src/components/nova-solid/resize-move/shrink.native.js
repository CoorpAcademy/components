import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 19.413v2.586h2v-6H2v2h2.586L.293 22.292l1.414 1.414zM22 5.999h-2.586l4.293-4.293L22.293.292 18 4.585V1.999h-2v6h6zM22 15.999h-6v6h2v-2.586l4.293 4.293 1.414-1.414-4.293-4.293H22zM2 5.999v2h6v-6H6v2.586L1.707.292.293 1.706l4.293 4.293zM10 7.999c-1.104 0-2 .897-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4c0-1.103-.896-2-2-2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
