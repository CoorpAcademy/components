import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M20 4H4c-1.1 0-2 .9-2 2v9h2v-2h16v2h2V6c0-1.1-.9-2-2-2zm-1 7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM20 8H4V6h16v2zM17 18v-3h-2v3c0 1.654 1.346 3 3 3h2v-2h-2c-.551 0-1-.449-1-1zM7 18c0 .551-.449 1-1 1H4v2h2c1.654 0 3-1.346 3-3v-3H7v3zM11 15h2v6h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
