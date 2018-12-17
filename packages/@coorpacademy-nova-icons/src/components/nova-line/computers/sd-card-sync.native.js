import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill="currentColor" d="M3 4h2v3H3zM6 4h2v3H6z" />
    <Path
      d="M10 18H2V2h7.532L14 7.362V10h2V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8v-2z"
      fill="currentColor"
    />
    <Path
      d="M18 12c-3.309 0-6 2.691-6 6h2c0-2.205 1.794-4 4-4s4 1.795 4 4-1.794 4-4 4c-1.069 0-2.074-.416-2.78-1.119l-.047-.054L17 19h-5v5l1.757-1.757A5.958 5.958 0 0 0 18 24c3.309 0 6-2.691 6-6s-2.691-6-6-6z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
