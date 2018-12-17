import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.707 6.293L12 1.586 7.293 6.293l1.414 1.414L11 5.414V15h2V5.414l2.293 2.293zM15.858 15c-.446 1.723-1.997 3-3.858 3s-3.412-1.277-3.858-3H2v7h20v-7h-6.142z" />
    </G>
  </Svg>
);

export default SvgComponent;
