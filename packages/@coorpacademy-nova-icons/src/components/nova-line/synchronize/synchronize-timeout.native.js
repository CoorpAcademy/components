import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 8v6h4v-2h-2V8z" />
      <Path d="M12 2a9.928 9.928 0 0 0-7.062 2.938L3 3v6h6L6.351 6.351A7.939 7.939 0 0 1 12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8v2c5.514 0 10-4.485 10-10S17.514 2 12 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
