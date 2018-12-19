import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5 19V3H3v17a1 1 0 0 0 1 1h17v-2H5z" />
      <Path d="M11 12.415l2.293 2.293a.999.999 0 0 0 1.414 0l6-6-1.414-1.414L14 12.586l-2.293-2.293a1 1 0 0 0-1.414 0l-4 4 1.414 1.414L11 12.415z" />
    </G>
  </Svg>
);

export default SvgComponent;
