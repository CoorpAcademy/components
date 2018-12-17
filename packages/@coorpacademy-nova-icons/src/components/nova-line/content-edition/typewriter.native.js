import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 3h10v3h2V1H5v5h2zM22 10V8a1 1 0 0 0-1-1H3c-.552 0-1 .449-1 1v2H1v2h1v1a1 1 0 0 0 1 1h.612l-1.561 4.684a.998.998 0 0 0 .12.869l-.003.002 2 3c.186.278.498.445.832.445h14c.334 0 .646-.167.832-.445l2-3-.003-.002c.17-.256.217-.575.12-.869L20.388 14H21a1 1 0 0 0 1-1v-1h1v-2h-1zM4 9h16v3H4V9zm14.465 12H5.535l-.667-1h14.263l-.666 1zm1.148-3H4.387l1.333-4h12.559l1.334 4z" />
      <Circle cx={8} cy={16} r={1} />
      <Circle cx={12} cy={16} r={1} />
      <Circle cx={16} cy={16} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
