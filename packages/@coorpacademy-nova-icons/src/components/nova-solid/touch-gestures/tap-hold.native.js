import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 2.005c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5zm1.293 7.707L17 7.419V4.005h2v2.586l1.707 1.707-1.414 1.414zM7.5 12.005a3.501 3.501 0 0 0-3.5 3.5v8.5h7v-8.5a3.5 3.5 0 0 0-3.5-3.5zm1.5 5H6v-1.5a1.5 1.5 0 1 1 3 0v1.5z" />
      <Path d="M7.5 8.005c-3.091 0-5.679 2.17-6.335 5.064l1.864 1.864C3.015 14.79 3 14.65 3 14.505c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 .145-.015.286-.029.429l1.864-1.864c-.656-2.895-3.244-5.065-6.335-5.065z" />
    </G>
  </Svg>
);

export default SvgComponent;
