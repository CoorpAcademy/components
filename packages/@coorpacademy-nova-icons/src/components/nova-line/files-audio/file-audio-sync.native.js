import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.265 8.367L8 6.612v5.438a2.5 2.5 0 1 0 2 2.45V9.388l2.632.877.633-1.898z" />
      <Path d="M2 2h10v4h4v4.005h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h8v-2H2V2z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4c-1.069 0-2.074-.416-2.78-1.119l-.047-.054L17 19h-5v5l1.757-1.757A5.958 5.958 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
