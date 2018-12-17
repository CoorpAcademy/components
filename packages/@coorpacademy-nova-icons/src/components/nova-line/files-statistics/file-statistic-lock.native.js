import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 12.418l1.293 1.293a1 1 0 0 0 1.414 0l3-3-1.414-1.413L10 11.59l-1.293-1.292a.997.997 0 0 0-1.414 0L6 11.59V8.004H4v9h8v-2H6v-.586l2-2z" />
      <Path d="M2 2.002h10v4h4v3.007h2V4.587L13.414.002H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h10v-2H2v-18z" />
      <Path d="M23 15.002c0-2.206-1.795-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={19.002} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
