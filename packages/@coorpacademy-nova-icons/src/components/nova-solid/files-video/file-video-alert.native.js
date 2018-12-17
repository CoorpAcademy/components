import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 0C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4.586L13.414 0H2zm3 17V9l8 4.003L5 17zm7-11V1l5 5h-5zM20 14.002h2v6h-2z" />
      <Circle cx={21} cy={21.996} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
