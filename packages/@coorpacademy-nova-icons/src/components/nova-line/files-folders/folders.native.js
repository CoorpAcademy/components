import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 6H2v13c0 1.103.897 2 2 2h15v-2H4V6z" />
      <Path d="M20 6h-5l-1.65-2.2a2.009 2.009 0 0 0-1.6-.8H8c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM8 15V5h3.75l1.65 2.2c.375.501.974.8 1.6.8h5l.001 7H8z" />
    </G>
  </Svg>
);

export default SvgComponent;
