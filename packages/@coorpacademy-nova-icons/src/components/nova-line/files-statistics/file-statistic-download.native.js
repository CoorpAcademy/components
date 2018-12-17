import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 12.418l1.293 1.293a1 1 0 0 0 1.414 0l3-3-1.414-1.413L10 11.59l-1.293-1.292a.997.997 0 0 0-1.414 0L6 11.59V8.004H4v9h8v-2H6v-.586l2-2z" />
      <Path d="M2 2.002h10v4h4v6.007h2V4.587L13.414.002H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h10v-2H2v-18zM22.293 17.294L20 19.587v-5.585h-2v5.585l-2.293-2.293-1.414 1.414L19 23.416l4.707-4.708z" />
    </G>
  </Svg>
);

export default SvgComponent;
