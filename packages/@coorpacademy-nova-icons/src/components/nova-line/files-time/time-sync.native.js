import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 8.465V4H8v5.535l3.446 2.297 1.109-1.664z" />
      <Path d="M2 9c0-3.86 3.14-7 7-7 3.859 0 7 3.14 7 7 0 .341-.033.673-.08 1h2.021c.037-.329.059-.662.059-1 0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a9.18 9.18 0 0 0 1-.058V15.92c-.327.047-.659.08-1 .08-3.859 0-7-3.14-7-7z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.069 0-2.074-.416-2.78-1.119l-.047-.054L17 19h-5v5l1.757-1.757A5.958 5.958 0 0 0 18 24c3.309 0 6-2.69 6-6 0-3.309-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
