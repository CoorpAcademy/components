import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 13.001l-2-2v-6h-2v6h-1v-5H9v7H7l2 5h7zM5 8.001c0-2.757 2.243-5 5-5v-2c-3.86 0-7 3.141-7 7H1l3 3 3-3H5z" />
      <Path d="M20 13.001l-3 3h2c0 2.757-2.243 5-5 5v2c3.86 0 7-3.14 7-7h2l-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
