import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 4.414V6h2V4.414l1.293 1.293 1.414-1.414L12 .586 8.293 4.293l1.414 1.414zM13 19.586V18h-2v1.586l-1.293-1.293-1.414 1.414L12 23.414l3.707-3.707-1.414-1.414zM5.707 10.707L4.293 9.293.586 13l3.707 3.707 1.414-1.414L4.414 14H6v-2H4.414zM19.707 9.293l-1.414 1.414L19.586 12H18v2h1.586l-1.293 1.293 1.414 1.414L23.414 13zM16 11h-2V8a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v4a1 1 0 0 0-.949 1.316l1 3A1 1 0 0 0 10 17h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4h-4.279l-.356-1.068A1 1 0 0 0 11 13V9h1v3a1 1 0 0 0 1 1h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
