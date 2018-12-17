import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 12.418l1.293 1.293a1 1 0 0 0 1.414 0l3-3-1.414-1.413L10 11.59l-1.293-1.292a.997.997 0 0 0-1.414 0L6 11.59V8.004H4v9h6v-1.998l.008-.002H6v-.586l2-2z" />
      <Path d="M2 2.002h10v4h4v4.007h2V4.587L13.414.002H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h8v-2H2v-18z" />
      <Path d="M24 16.295h-4.286L18 12.009l-1.715 4.286H12l3.708 3.13-1.994 4.584L18 21.175l4.285 2.834-1.993-4.584z" />
    </G>
  </Svg>
);

export default SvgComponent;
