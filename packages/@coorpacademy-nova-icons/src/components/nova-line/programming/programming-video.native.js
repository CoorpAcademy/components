import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 3H2C.897 3 0 3.897 0 5v13c0 1.103.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.104 0 2-.897 2-2V5c0-1.103-.896-2-2-2zm0 2l-.002 10H2V5h20zM2 18v-1h19.997v1H2z" />
      <Path d="M8.999 6v8l8-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
