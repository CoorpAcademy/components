import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 6.006h17.999v3.993H22V2.006c0-1.104-.897-2-2-2H2c-1.103 0-2 .896-2 2v16c0 1.102.897 2 2 2h8v-2H2v-12zm5-2v-2h3v2H7zm13 0h-8v-2h8v2zm-15-2v2H2v-2h3zM18 22c-1.077 0-2.063-.44-2.81-1.19L17 19h-5v5l1.763-1.763A6.036 6.036 0 0 0 18 24c3.309 0 6-2.691 6-6h-2c0 2.205-1.794 4-4 4z" />
      <Path d="M22.239 13.761A5.936 5.936 0 0 0 18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.811 1.189L19 17h5v-5l-1.761 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
