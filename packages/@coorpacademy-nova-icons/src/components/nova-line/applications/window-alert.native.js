import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 0H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h16v-2H2V6h17.999l-.001 6H22V2c0-1.103-.896-2-2-2zM10 2v2H7V2h3zM2 2h3v2H2V2zm10 2V2h8v2h-8z" />
      <Path d="M20 14h2v6h-2z" />
      <Circle cx={21} cy={22} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
