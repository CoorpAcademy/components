import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 3H2C.897 3 0 3.897 0 5v13c0 1.103.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2l-.002 10H2V5h20zM2 18v-1h19.997v1H2z" />
      <Path d="M18 14v-2h-1V7h-3V6H9v2H8V6H6v8h12zm-3-5v3h-1V9h1zm-3-1v4h-1V8h1zm-4 4v-2h1v2H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
