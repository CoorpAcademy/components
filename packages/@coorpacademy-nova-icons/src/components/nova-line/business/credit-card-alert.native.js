import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <Path d="M2 7h15.999l-.001 5H20V2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v12c0 1.103.896 2 2 2h16v-2H2V7zm16-5l-.001 3H2V2h16zM20 14h2v6h-2z" />
      <Circle cx={21} cy={22} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
