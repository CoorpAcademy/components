import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.293 12.707l1.414-1.414L7.414 10l1.293-1.293-1.414-1.414L4.586 10z" />
      <Path d="M4.707 8.707L3.293 7.293.586 10l2.707 2.707 1.414-1.414L3.414 10zM16.707 12.707L19.414 10l-2.707-2.707-1.414 1.414L16.586 10l-1.293 1.293z" />
      <Path d="M20.707 7.293l-1.414 1.414L20.586 10l-1.293 1.293 1.414 1.414L23.414 10zM16.316 16.052L14 15.279V13a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v4H8a1 1 0 0 0-.832 1.554l2 3A1 1 0 0 0 10 22h6a1 1 0 0 0 1-1v-4a.998.998 0 0 0-.684-.948zM15 20h-4.465l-.667-1H10a1 1 0 0 0 1-1v-4h1v2a1 1 0 0 0 .684.949l2.316.772V20z" />
    </G>
  </Svg>
);

export default SvgComponent;
