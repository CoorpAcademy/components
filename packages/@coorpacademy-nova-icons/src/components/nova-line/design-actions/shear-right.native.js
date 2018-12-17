import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.514 7L.942 23h10.543L24 7H13.514zm-3 14H5.058l9.428-12h5.457l-9.429 12zM5.293 9.294l1.414 1.412L11.414 6 6.707 1.294 5.293 2.706 7.586 5H2v2h5.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
