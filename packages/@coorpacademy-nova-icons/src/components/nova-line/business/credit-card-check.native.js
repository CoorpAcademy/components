import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 14V2c0-1.102-.896-2-2-2H2C.897 0 0 .898 0 2v12c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2zM18 2l-.001 3H2V2h16zM2 14V7h15.999l-.002 7H2z" />
      <Path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3zM22.293 16.293L18 20.586l-2.293-2.293-1.414 1.414L18 23.415l5.707-5.708z" />
    </G>
  </Svg>
);

export default SvgComponent;
