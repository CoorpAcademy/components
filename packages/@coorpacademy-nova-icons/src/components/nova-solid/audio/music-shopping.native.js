import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18.58 10.003l-3.712-6.496-1.736.992 3.145 5.504H7.723l3.146-5.504-1.737-.992-3.712 6.496H2v2h1.198l1.826 8.217a1 1 0 0 0 .976.783h12a1 1 0 0 0 .976-.783l1.826-8.217H22v-2h-3.42zm-2.58 7.5a1.5 1.5 0 1 1-1.5-1.5v-2.142L11 15.003v3.5a1.5 1.5 0 1 1-1.5-1.5v-2.545a.75.75 0 0 1 .518-.713l5-1.63a.75.75 0 0 1 .983.712v4.676z"
    />
  </Svg>
);

export default SvgComponent;
