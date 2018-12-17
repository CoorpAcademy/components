import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 9h2v14h-2zM1 23.414L8.414 16 1 8.586v14.828zm2-10L5.586 16 3 18.586v-5.172zM15 16l8 7V9z" />
      <Path d="M20 7V5H6.414l2.293-2.294-1.414-1.412L2.586 6l4.707 4.706 1.414-1.412L6.414 7z" />
    </G>
  </Svg>
);

export default SvgComponent;
