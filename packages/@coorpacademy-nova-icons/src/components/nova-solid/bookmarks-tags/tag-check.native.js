import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 0h-7a.997.997 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l11-11A.997.997 0 0 0 20 8V1a1 1 0 0 0-1-1zm-4 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM18 23.414l-3.707-3.707 1.414-1.414L18 20.586l4.293-4.293 1.414 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
