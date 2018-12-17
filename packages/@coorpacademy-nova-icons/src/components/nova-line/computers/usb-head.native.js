import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 9V4c0-1.104-.897-2-2-2H8c-1.103 0-2 .896-2 2v5H4v6.414l4 4V22h8v-2.586l4-4V9h-2zM8 4h8v5H8V4zm10 10.586l-4 4V20h-4v-1.414l-4-4V11h12v3.586z" />
      <Path d="M9 5h2v3H9zM13 5h2v3h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
