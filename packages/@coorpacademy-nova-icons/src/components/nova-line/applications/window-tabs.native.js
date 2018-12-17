import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 1H2C.897 1 0 1.897 0 3v6c0 1.103.897 2 2 2h7c1.104 0 2-.897 2-2V3c0-1.103-.896-2-2-2zm0 2v1H2V3h7zM2 9V6h6.999l-.002 3H2zM22 1h-7c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h7c1.104 0 2-.897 2-2V3c0-1.103-.896-2-2-2zm0 2v1h-7V3h7zm-7 6V6h6.999l-.002 3H15zM9 13H2c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h7c1.104 0 2-.897 2-2v-6c0-1.103-.896-2-2-2zm0 2v1H2v-1h7zm-7 6v-3h6.999l-.002 3H2zM22 13h-7c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h7c1.104 0 2-.897 2-2v-6c0-1.103-.896-2-2-2zm0 2v1h-7v-1h7zm-7 6v-3h6.999l-.002 3H15z" />
    </G>
  </Svg>
);

export default SvgComponent;
