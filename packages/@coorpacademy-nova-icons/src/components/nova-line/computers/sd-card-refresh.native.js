import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M10 20H2c-1.103 0-2-.897-2-2V2C0 .896.897 0 2 0h7.531c.596 0 1.156.262 1.537.72l4.468 5.362A2 2 0 0 1 16 7.362V10h-2V7.362L9.532 2H2v16h8v2z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M3 4h2v3H3zM6 4h2v3H6z" />
    <G fill="currentColor">
      <Path d="M18 22c-1.077 0-2.064-.44-2.811-1.189L17 19h-5v5l1.761-1.762A5.942 5.942 0 0 0 18 24c3.309 0 6-2.691 6-6h-2c0 2.205-1.794 4-4 4zM22.24 13.761A5.941 5.941 0 0 0 18 12c-3.309 0-6 2.691-6 6h2c0-2.205 1.794-4 4-4 1.078 0 2.065.44 2.811 1.188L19 17h5v-5l-1.76 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
