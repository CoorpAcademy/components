import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24H0z" />
    <G fill="currentColor">
      <Path d="M18.908 20.582l-6-13a1 1 0 0 0-1.816 0l-6 13A1 1 0 0 0 6 22h12a1 1 0 0 0 .908-1.418zm-4.128-4.171L7.961 19.14l1.17-2.536 4.791-2.054.858 1.861zM12 10.387l1.084 2.347-2.701 1.157L12 10.387zM11.193 20l4.426-1.771.819 1.771h-5.245z" />
      <Path d="M10.707 7.707L12 6.414l1.293 1.293 1.414-1.414L13.414 5l1.293-1.293-1.414-1.414L12 3.586l-1.293-1.293-1.414 1.414L10.586 5 9.293 6.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
