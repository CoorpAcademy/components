import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 7.414l1.293 1.293 1.414-1.414L8 4.586 5.293 7.293l1.414 1.414z" />
      <Path d="M8 3.414l1.293 1.293 1.414-1.414L8 .586 5.293 3.293l1.414 1.414zM8 16.586l-1.293-1.293-1.414 1.414L8 19.414l2.707-2.707-1.414-1.414z" />
      <Path d="M8 20.586l-1.293-1.293-1.414 1.414L8 23.414l2.707-2.707-1.414-1.414zM19.316 11.052L17 10.279V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v4h-1a1 1 0 0 0-.832 1.554l2 3A1 1 0 0 0 13 17h6a1 1 0 0 0 1-1v-4a.998.998 0 0 0-.684-.948zM18 15h-4.465l-.667-1H13a1 1 0 0 0 1-1V9h1v2a1 1 0 0 0 .684.949l2.316.772V15z" />
    </G>
  </Svg>
);

export default SvgComponent;
