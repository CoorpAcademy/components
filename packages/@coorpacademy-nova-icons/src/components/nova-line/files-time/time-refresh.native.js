import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 8.465V4H8v5.535l3.445 2.297 1.11-1.664z" />
      <Path d="M2 9c0-3.86 3.14-7 7-7 3.859 0 7 3.14 7 7 0 .341-.033.673-.08 1h2.021c.036-.329.059-.662.059-1 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9c.338 0 .671-.022 1-.059V15.92c-.328.047-.66.08-1 .08-3.86 0-7-3.14-7-7zM18 22c-1.077 0-2.064-.44-2.811-1.189L17 19h-5v5l1.761-1.761A5.937 5.937 0 0 0 18 24c3.309 0 6-2.69 6-6h-2c0 2.206-1.794 4-4 4z" />
      <Path d="M22.24 13.761A5.941 5.941 0 0 0 18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.811 1.188L19 17h5v-5l-1.76 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
