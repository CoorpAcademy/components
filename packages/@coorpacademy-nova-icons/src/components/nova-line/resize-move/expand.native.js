import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 1.999h2.586l-3.293 3.293 1.414 1.414L22 3.413v2.586h2v-6h-6zM5.293 17.292L2 20.585v-2.586H0v6h6v-2H3.414l3.293-3.293zM6 1.999v-2H0v6h2V3.413l3.293 3.293 1.414-1.414-3.293-3.293zM22 20.585l-3.293-3.293-1.414 1.414 3.293 3.293H18v2h6v-6h-2zM15 6.999H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6c0-1.103-.896-2-2-2zm-.003 8H9v-6h6l-.003 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
