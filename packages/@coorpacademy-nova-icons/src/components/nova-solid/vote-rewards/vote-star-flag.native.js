import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.414 6L12 3.414 14.586 6h2.828l-4.707-4.707a.999.999 0 0 0-1.414 0L6.586 6h2.828zM4 7v10l8 5 8-5V7H4zm11 10l-3-2-3 2 1-3-2-2h3l1-3 1 3h3l-2 2 1 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
