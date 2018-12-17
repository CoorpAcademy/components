import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 9h2v14h-2zM14.438 16L23 23.135V8.865L14.438 16zM21 18.865L17.562 16 21 13.135v5.73zM1 23l8-7-8-7z" />
      <Path d="M15.293 9.294l1.414 1.412L21.414 6l-4.707-4.706-1.414 1.412L17.586 5H4v2h13.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
