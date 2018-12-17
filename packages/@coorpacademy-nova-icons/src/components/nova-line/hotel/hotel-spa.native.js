import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M16.6 15.4c0-.883-1.6-2.4-1.6-2.4s-1.6 1.517-1.6 2.4c0 .148.026.29.064.427C12.755 15.394 11.882 15 11 15c0 3 3 3 4 3s4 0 4-3c-.883 0-1.755.394-2.465.827.038-.137.065-.278.065-.427z" />
      <Path d="M17 2H7C4.243 2 2 4.243 2 7v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7c0-2.757-2.243-5-5-5zm-.414 2L12 8.586 7.414 4h9.172zM4 20V7c0-.977.476-1.837 1.201-2.385L10.586 10l-2.293 2.293A.997.997 0 0 0 8 13v7H4zm16 0H10v-6.586l8.799-8.799A2.985 2.985 0 0 1 20 7v13z" />
    </G>
  </Svg>
);

export default SvgComponent;
