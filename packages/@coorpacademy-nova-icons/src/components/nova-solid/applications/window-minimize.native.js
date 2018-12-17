import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 20.003H13a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1zM20 2a2 2 0 0 0-2-2H2C.897 0 0 .896 0 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM20 16V5.002H0V16c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2zm-9-.997H6l1.793-1.793-4.5-4.5 1.414-1.414 4.5 4.5L11 10.003v5z" />
    </G>
  </Svg>
);

export default SvgComponent;
