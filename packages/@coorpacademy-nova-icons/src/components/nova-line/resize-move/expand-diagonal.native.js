import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.707 11.706L20 5.413v2.586h2v-6h-6v2h2.586l-6.293 6.293zM8 19.999H5.414l6.293-6.293-1.414-1.414L4 18.585v-2.586H2v6h6z" />
    </G>
  </Svg>
);

export default SvgComponent;
