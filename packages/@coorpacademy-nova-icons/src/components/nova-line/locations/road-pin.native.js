import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M19 11a4 4 0 0 0-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 0 0-4-4zm0 6a2 2 0 1 1 .001-4.001A2 2 0 0 1 19 17z" />
      <Path d="M7.76 5H10v3h2V5h2.24l1.189 4.281 1.927-.535-1.393-5.014A1 1 0 0 0 15 3H7a1 1 0 0 0-.963.732l-5 18A1.002 1.002 0 0 0 2 23h14v-2H3.315L7.76 5z" />
      <Path d="M10 16h2v4h-2zM10 10h2v4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
