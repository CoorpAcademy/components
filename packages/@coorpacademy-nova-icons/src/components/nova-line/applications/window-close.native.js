import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 18V6h18l-.001 8H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h13v-2H2zM7 4V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <Path d="M23.707 17.708l-1.414-1.414L20 18.586l-2.293-2.292-1.414 1.414L18.586 20l-2.293 2.294 1.414 1.414L20 21.414l2.293 2.294 1.414-1.414L21.414 20z" />
    </G>
  </Svg>
);

export default SvgComponent;
