import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20 9v1h-4.556c.345.59.556 1.268.556 2a3.95 3.95 0 0 1-.555 2H20v1h2V9h-2zM9 2v2h1v4.556C10.59 8.212 11.268 8 12 8s1.41.211 2 .556V4h1V2H9zM4 10V9H2v6h2v-1h4.555A3.952 3.952 0 0 1 8 12c0-.732.211-1.409.556-2H4zM14 15.445c-.59.345-1.268.555-2 .555s-1.41-.21-2-.554V20H9v2h6v-2h-1v-4.555z" />
      <Circle cx={12} cy={12} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
