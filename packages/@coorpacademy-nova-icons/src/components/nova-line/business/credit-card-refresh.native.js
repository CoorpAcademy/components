import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <Path d="M2 7h15.999l-.001 3H20V2c0-1.102-.896-2-2-2H2C.897 0 0 .898 0 2v12c0 1.103.897 2 2 2h8v-2H2V7zm16-5l-.001 3H2V2h16zM18 22c-1.076 0-2.063-.44-2.811-1.189L17 19h-5v5l1.764-1.763A6.031 6.031 0 0 0 18 24c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4z" />
      <Path d="M22.24 13.761A5.94 5.94 0 0 0 18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.795-4 4-4 1.078 0 2.065.44 2.812 1.188L19 17h5v-5l-1.76 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
