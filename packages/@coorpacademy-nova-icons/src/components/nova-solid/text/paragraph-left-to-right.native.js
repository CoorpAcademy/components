import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.707 14.293l-1.414 1.414L19.586 18H2v2h17.586l-2.293 2.293 1.414 1.413L23.414 19z" />
      <Path d="M7 10h2v6h2V2h2v14h2V2h3V0H7C4.243 0 2 2.243 2 5s2.243 5 5 5zm0-8h2v6H7C5.346 8 4 6.654 4 5s1.346-3 3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
