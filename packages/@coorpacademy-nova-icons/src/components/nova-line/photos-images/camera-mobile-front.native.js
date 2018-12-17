import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 19.998H5v-11h9v-2H5v-2h7v-2H5c-1.103 0-2 .896-2 2v17h16v-11h-2v9z" />
      <Path d="M15.909 6.088L17 8.998l1.091-2.91L21 4.998l-2.909-1.091L17 .998l-1.091 2.909L13 4.998zM8 18.998h6c0-1.841-1.159-3-3-3s-3 1.159-3 3z" />
      <Circle cx={11} cy={12.998} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
