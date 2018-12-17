import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 2h10v4h4v2h2V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h2v-2H2V2z" />
      <Path d="M11 21h2v-6h2v6h2v-3.697l.168.252c.371.557 1.293.557 1.664 0l.168-.252V21h2v-7a1 1 0 0 0-1.832-.555L18 15.197l-1.168-1.752A1 1 0 0 0 15 14v-1H9v2h2v6z" />
      <Path d="M6 10v14h18V10H6zm16 12H8V12h14v10z" />
    </G>
  </Svg>
);

export default SvgComponent;
