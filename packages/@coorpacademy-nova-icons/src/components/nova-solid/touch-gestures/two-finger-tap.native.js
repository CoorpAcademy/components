import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 10.005h-2v6h-1v-5H9v7H6l3 6h8v-6l-3-2z" />
      <Path d="M7.165 10.505c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .145-.015.286-.029.429L18 9.069c-.656-2.894-3.245-5.064-6.335-5.064-3.091 0-5.679 2.17-6.335 5.064l1.864 1.864a4.047 4.047 0 0 1-.029-.428z" />
    </G>
  </Svg>
);

export default SvgComponent;
