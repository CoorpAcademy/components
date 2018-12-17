import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.707 8.293L5.414 6H18v6h2V6c0-1.103-.896-2-2-2H5.414l2.293-2.293L6.293.293 1.586 5l4.707 4.707 1.414-1.414zM17.707 14.293l-1.414 1.414L18.586 18H6v-6H4v6c0 1.104.897 2 2 2h12.586l-2.293 2.293 1.414 1.414L22.414 19l-4.707-4.707z" />
      <Path d="M13 16V9a1.002 1.002 0 0 0-1.707-.707L8.586 11 10 12.414l1-1V16h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
