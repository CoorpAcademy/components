import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <G fill="currentColor">
      <Path d="M20 12.186V9.95c1.14-.233 2-1.243 2-2.45C22 6.122 20.879 5 19.5 5H18V4h1V2h-4v2h1v1h-1.5A2.503 2.503 0 0 0 12 7.5c0 1.207.86 2.217 2 2.45v2.236A2.992 2.992 0 0 0 12 15v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a2.992 2.992 0 0 0-2-2.814zM18 10v2h-2v-2h2zm-3.5-3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm.5 7h4c.551 0 1 .449 1 1v5h-6v-5c0-.551.449-1 1-1zM6.5 12C3.851 12 2 13.645 2 16v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-5c0-2.355-1.851-4-4.5-4zM9 20H4v-4c0-1.474 1.291-2 2.5-2s2.5.526 2.5 2v4z" />
      <Circle cx={5.5} cy={15.5} r={0.75} />
      <Circle cx={7.5} cy={15.5} r={0.75} />
    </G>
  </Svg>
);

export default SvgComponent;
