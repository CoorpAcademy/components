import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24.001" {...props}>
    <Path fill="none" d="M0 .006h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 19v-6H5v2h2.586l-5.293 5.293 1.414 1.414L9 16.414V19zM20.293 2.293L15 7.586V5h-2v6h6V9h-2.586l5.293-5.293zM5.708 4.293l14 14-1.415 1.414-14-14z" />
    </G>
  </Svg>
);

export default SvgComponent;
