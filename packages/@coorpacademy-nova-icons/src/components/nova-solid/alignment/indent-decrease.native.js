import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 3.003h15v2H7zM14 7.003h8v2h-8zM14 11.003h8v2h-8zM14 15.003h8v2h-8zM7 19.003h15v2H7zM2 12.003l6 6v-2h4v-8H8v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
