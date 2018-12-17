import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 3H2C.897 3 0 3.896 0 5v13c0 1.103.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.104 0 2-.897 2-2V5a2 2 0 0 0-2-2zm0 2l-.002 10H2V5h20zM2 18v-1h19.997v1H2z" />
      <Path d="M8.999 13a3 3 0 0 0 3-3h-3V7a3.001 3.001 0 0 0 0 6z" />
      <Path d="M9.999 6v3h3a3 3 0 0 0-3-3zM14.999 6h3v2h-3zM13.999 9h4v2h-4zM11.999 12h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
